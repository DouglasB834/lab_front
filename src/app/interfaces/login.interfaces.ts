import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3, "usuário deve ser informado").max(50),
  password: z.string().min(6, "senha minimo 6 caracter").max(50),
  isAdmin: z.boolean().default(false),
});
export const loginSchema = userSchema.omit({ isAdmin: true });

export const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(1, "a senha deve ser informada").max(50),
  })
  .refine((val) => val.password == val.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });
export type User = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
