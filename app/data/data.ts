'use server';

import { sql } from '@vercel/postgres';
import {
    Fighter,
    FightCard,
    Fight
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
          f.cardPosition,
          f.fighter1_id,
          f.fighter2_id, 
          CONCAT(f1.first_name, ' ', f1.last_name) AS fighter1_name,
          CONCAT(f2.first_name, ' ', f2.last_name) AS fighter2_name,
          f.result,
          f.winner,
          f.fighter1_PiggyVotes,
          f.fighter2_PiggyVotes
      FROM
          Fight f
      JOIN
          FightCard fc ON f.fight_card_id = fc.fight_card_id
      JOIN
          Fighter f1 ON f.fighter1_id = f1.fighter_id
      JOIN
          Fighter f2 ON f.fighter2_id = f2.fighter_id
      WHERE 
          f.fight_card_id = ${fightCardID}
      ORDER BY 
          f.cardPosition ASC;
    `;
    console.log('Query Result:', fightsData.rows); // Add debugging log to verify query result

        return fightsData.rows;
    } catch (error) {
      console.error('Failed to fetch fights:', error);
      throw new Error('Failed to fetch fights.');
    }
  }

  // include variable to prevent double call of onclick
  let isVoting = false;

export async function addVote(fighterNum: string, fight_id: number) {
  if (isVoting) return; // Prevent double voting
  isVoting = true;

  try {
    console.log(fight_id);
    if (fighterNum === 'fighter1') {
      await sql`
        UPDATE Fight
        SET fighter1_piggyvotes = fighter1_piggyvotes + 1
        WHERE fight_id = ${fight_id}
      `;
    } else if (fighterNum === 'fighter2') {
      await sql`
        UPDATE Fight
        SET fighter2_piggyvotes = fighter2_piggyvotes + 1
        WHERE fight_id = ${fight_id}
      `;
    } else {
      throw new Error("Invalid fighter number. It should be either 1 or 2.");
    }
  } catch (error) {
    console.error("Error updating votes:", error);
  } finally {
    isVoting = false;
  }
}

  
