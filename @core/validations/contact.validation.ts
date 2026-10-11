import { z } from "zod";
import { COMMON_MESSAGES, ENQUIRY_MESSAGES } from "../constants/messages";

/* ===================== MAIN ===================== */
export const contactSchema = z.object({
  name: z.string().optional(),

  email: z.string().email(ENQUIRY_MESSAGES.EMAIL_INVALID),

  phone: z.string().optional(),

  service: z.string().optional(),

  website: z.string().optional(),

  description: z.string().optional(),
});
