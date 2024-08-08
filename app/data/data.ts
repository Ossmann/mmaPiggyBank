'use server';

import { sql } from '@vercel/postgres';
import {
    Fighter,
    FightCard,
    Fight,
    FighterFight,
  } from './definitions';

  export async function getFightCards() {
    try {
      const fightCardsData = await sql<FightCard>`
        SELECT DISTINCT fight_card_id, name, date
        FROM FightCard
        ORDER BY date`;

        return fightCardsData.rows;

    } catch (error) {
        if (error instanceof Error) {
            console.error('Failed to fetch Fight Cards:', error.message, error.stack);
          } else {
            console.error('Failed to fetch Fight Cards:', error);
          }
        throw new Error('Failed to fetch Fight Cards.');
      }
  }

  export async function getFights(fightCardID: number) {
    try {
      const fightsData = await sql<Fight>`
      SELECT 
          f.fight_id,
          f.fight_card_id,
          f.cardPosition,
          MAX(CASE WHEN ff1.role = 'fighter1' THEN CONCAT(ftr1.first_name, ' ', ftr1.last_name) ELSE CONCAT(ftr2.first_name, ' ', ftr2.last_name) END) AS fighter1_name,
          MAX(CASE WHEN ff1.role = 'fighter1' THEN ff1.PiggyVotes ELSE ff2.PiggyVotes END) AS fighter1_piggyvotes,
          MAX(CASE WHEN ff1.role = 'fighter1' THEN ff1.result ELSE ff2.result END) AS fighter1_result,
          MAX(CASE WHEN ff1.role = 'fighter1' THEN ff1.role ELSE ff2.role END) AS fighter1_role,
          MAX(CASE WHEN ff2.role = 'fighter2' THEN CONCAT(ftr2.first_name, ' ', ftr2.last_name) ELSE CONCAT(ftr1.first_name, ' ', ftr1.last_name) END) AS fighter2_name,
          MAX(CASE WHEN ff2.role = 'fighter2' THEN ff2.PiggyVotes ELSE ff1.PiggyVotes END) AS fighter2_piggyvotes,
          MAX(CASE WHEN ff2.role = 'fighter2' THEN ff2.result ELSE ff1.result END) AS fighter2_result,
          MAX(CASE WHEN ff2.role = 'fighter2' THEN ff2.role ELSE ff1.role END) AS fighter2_role
      FROM 
          Fight f
      JOIN 
          FighterFight ff1 ON f.fight_id = ff1.fight_id
      JOIN 
          Fighter ftr1 ON ff1.fighter_id = ftr1.fighter_id
      JOIN 
          FighterFight ff2 ON f.fight_id = ff2.fight_id AND ff2.fighter_id <> ff1.fighter_id
      JOIN 
          Fighter ftr2 ON ff2.fighter_id = ftr2.fighter_id
      WHERE 
          f.fight_card_id = ${fightCardID}
      GROUP BY 
          f.fight_id, f.fight_card_id, f.cardPosition
      ORDER BY 
          f.cardPosition DESC;
    `;
    console.log('Query Result:', fightsData.rows); // Add debugging log to verify query result

        return fightsData.rows;
    } catch (error) {
      console.error('Failed to fetch fights:', error);
      throw new Error('Failed to fetch fights.');
    }
  }
