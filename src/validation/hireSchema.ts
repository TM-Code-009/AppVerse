import { z } from "zod";

export const hireSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short"),

  email: z
    .email("Invalid email"),

  budget: z
    .string()
    .min(1, "Budget required"),

  projectType: z
    .string(),

  description: z
    .string()
    .min(
      20,
      "Tell me more about your project"
    ),
});