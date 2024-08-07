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
        SELECT DISTINCT name, date
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
        CONCAT(ftr1.first_name, ' ', ftr1.last_name) AS fighter1_name,
        ftr1.PiggyVotes AS fighter1_piggyvotes,
        ff1.result AS fighter1_result,
        ff1.role AS fighter1_role,
        CONCAT(ftr2.first_name, ' ', ftr2.last_name) AS fighter2_name,
        ftr2.PiggyVotes AS fighter2_piggyvotes,
        ff2.result AS fighter2_result,
        ff2.role AS fighter2_role
      FROM 
        FightCard fc
      JOIN 
        Fight f ON fc.fight_card_id = f.fight_card_id
      JOIN 
        FighterFight ff1 ON f.fight_id = ff1.fight_id
      JOIN 
        Fighter ftr1 ON ff1.fighter_id = ftr1.fighter_id
      JOIN 
        FighterFight ff2 ON f.fight_id = ff2.fight_id AND ff2.fighter_id <> ff1.fighter_id
      JOIN 
        Fighter ftr2 ON ff2.fighter_id = ftr2.fighter_id
      WHERE 
        fc.fight_card_id = ${fightCardID}
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
