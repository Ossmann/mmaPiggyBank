'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres'; 
import Form from '../CMS/page';

const FormSchema = z.object({
    result: z.string(),
});

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

