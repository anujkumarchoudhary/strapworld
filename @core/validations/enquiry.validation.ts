import { z } from "zod";
import { COMMON_MESSAGES, ENQUIRY_MESSAGES } from "../constants/messages";

/* ===================== SERVICE ===================== */
export const serviceSchema = z.object({
  name: z.string().min(1, COMMON_MESSAGES.REQUIRED("Service ID")),
  // .regex(/^[0-9a-fA-F]{24}$/, ENQUIRY_MESSAGES.OBJECT_ID_INVALID),
});

/* ===================== ADDITION DETAILS ===================== */
export const additionalDetailsSchema = z.object({
  budget: z.string().min(1, COMMON_MESSAGES.REQUIRED("Budget")),
  source: z.string().optional(), // ✅ optional
  startFrom: z.string().min(1, COMMON_MESSAGES.REQUIRED("Start date")),
  attachments: z.string().optional(),
});

/* ===================== MAIN ===================== */
export const enquirySchema = z.object({
  name: z.string().optional(),

  email: z.string().email(ENQUIRY_MESSAGES.EMAIL_INVALID),

  phone: z.string().optional(),

  // website: z.preprocess(
  //   (value) => (value === "" ? undefined : value),
  //   z
  //     .string()
  //     .refine(
  //       (val) =>
  //         /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}$/.test(val),
  //       ENQUIRY_MESSAGES.WEBSITE_INVALID
  //     )
  //     .optional()
  // ),

  // services: z.array(serviceSchema).optional(),

  message: z.string().optional(),

  // description: z.string().min(10, ENQUIRY_MESSAGES.DESCRIPTION_MIN),

  // additionDetails: additionalDetailsSchema,

  service: z.string().optional(),

  smsConsent: z.boolean().optional(),

  whatsappConsent: z.boolean().optional(),
});
