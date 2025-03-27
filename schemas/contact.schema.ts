import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().min(4, 'contact.errors.name'),
  company: z.string().min(4, 'contact.errors.company'),
  email: z.string().email('contact.errors.email'),
  phone: z.string().min(1, 'contact.errors.phone'),
  source: z.string().min(1, 'contact.errors.source'),
});

export type ContactValues = z.infer<typeof contactSchema>;
