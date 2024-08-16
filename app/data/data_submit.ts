'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres'; 
import Form from '../CMS/page';

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

//function to update fights
export async function updateFightDB(formData: FormData) {
    const { result } = FormSchema.parse({
      result: formData.get('result'),
    });

console.log('Parsed Data:', { result }); // Log parsed data

await sql`
        INSERT INTO Fight (result)
        VALUES (${result})
    `;

}

