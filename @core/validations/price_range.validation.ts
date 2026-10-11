// validations/priceRange.validation.ts

import { z } from "zod";

export const createPriceRangeSchema = z.object({
  label: z.string().min(1, "Label is required"),
  value: z.string().min(1, "Value is required"),
});

export const updatePriceRangeSchema = z.object({
  label: z.string().optional(),
  value: z.string().optional(),
  isActive: z.boolean().optional(),
});