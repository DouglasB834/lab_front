import { z } from "zod";

const userSchema = z.object({
  username: z.string().max(50),
  password: z.string().max(50),
  isAdmin: z.boolean().default(false),
});
export type User = z.infer<typeof userSchema>;
