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
