'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres'; 
import Form from '../components/internal/UpdateFightsForm';

const FormSchema = z.object({
    result: z.string(),
});

  //function to store number the page visits
  export async function storePageVisit(pageUrl: string = '/') {
    try {
      await sql`
        INSERT INTO visits (page_url)
        VALUES (${pageUrl})
      `;
    } catch (error) {
      console.error("Error storing page visit:", error);
    }
  }

  //zod schema of the CMS Form
  const FightSchema = z.object({
    fight_id: z.number(),
    cardposition: z.number(),
    fighter1_piggyvotes: z.number(),
    fighter2_piggyvotes: z.number(),
    winner: z.number(),
    result: z.string(),
});




// Function to update fights
export async function updateFightDB(formData: FormData) {
  try {
      // Parse all necessary fields from the formData using the FightSchema
      const {
          fight_id,
          cardposition,
          fighter1_piggyvotes,
          fighter2_piggyvotes,
          winner,
          result,
      } = FightSchema.parse({
          fight_id: Number(formData.get('fight_id')),
          cardposition: Number(formData.get('cardposition')),
          fighter1_piggyvotes: Number(formData.get('fighter1_piggyvotes')),
          fighter2_piggyvotes: Number(formData.get('fighter2_piggyvotes')),
          winner: Number(formData.get('winner')),
          result: String(formData.get('result')),
      });

      // Log the parsed values to ensure they are correct
      console.log('Parsed values:', {
          fight_id,
          cardposition,
          fighter1_piggyvotes,
          fighter2_piggyvotes,
          winner,
          result,
      });

      // Construct the SQL update query to update the Fight table
      const updateResult = await sql`
          UPDATE Fight
          SET
              cardposition = ${cardposition},
              fighter1_piggyvotes = ${fighter1_piggyvotes},
              fighter2_piggyvotes = ${fighter2_piggyvotes},
              winner = ${winner},
              result = ${result}
          WHERE
              fight_id = ${fight_id}
      `;

      // Log the result of the SQL query execution
      console.log('Update result:', updateResult);
  } catch (error) {
      console.error('Error updating fight:', error);
  }
}