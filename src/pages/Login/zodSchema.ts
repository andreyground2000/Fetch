import * as z from "zod";

export const LoginSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(10, { message: "Name must be not more than 10 characters" }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});
