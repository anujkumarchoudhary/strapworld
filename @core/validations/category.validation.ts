import { z } from "zod";
import { ENQUIRY_MESSAGES } from "../constants/messages";

export const categorySchema = z.object({
  name: z.string().min(2, ENQUIRY_MESSAGES.NAME_MIN),

  description: z.string().optional(),

  isActive: z.boolean().optional(),
});
