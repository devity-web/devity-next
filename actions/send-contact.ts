'use server';

import type {ContactValues} from '@/schemas/contact.schema';
import {createClient} from '@supabase/supabase-js';

export async function sendContact(values: ContactValues) {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  );

  const result = await client.from('contacts').insert(values);

  if (result.error) {
    throw new Error(result.error.message);
  }
}
