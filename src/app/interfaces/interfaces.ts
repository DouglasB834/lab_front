import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(1, "usuário deve ser informado").max(50),
  password: z.string().min(1, "a senha deve ser informada").max(50),
  isAdmin: z.boolean().default(false),
});
export const loginSchema = userSchema.omit({ isAdmin: true });

export type User = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
