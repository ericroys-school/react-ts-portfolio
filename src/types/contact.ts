import { z } from 'zod';
import { ContactMeSchema } from '../validators/validators';

/**
 * Just re-export the zod type as our type
 */
export type NewContact = z.infer<typeof ContactMeSchema>;
