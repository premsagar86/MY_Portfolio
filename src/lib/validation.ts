import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.email("Enter a valid email address"),
  subject: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message is too short")
    .max(3000, "Message is too long"),
  // honeypot — real users never see or fill this; the route drops any request
  // where it is non-empty (kept unconstrained so bots get a silent {ok:true})
  company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
