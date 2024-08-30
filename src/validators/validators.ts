import { z } from 'zod';

export const ContactMeSchema = z.object({
  name: z
    .string()
    .min(1, 'Unless you are a robot or Prince, please enter a name'),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(5, `Please enter a short message so I don't think you are a robot`),
});
