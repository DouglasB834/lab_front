import { z } from "zod";

export const genreEnum = ["MASCULINO", "FEMININO"] as const;

export const createPacientSchema = z.object({
  name: z.string().min(1, "o nome deve ser preenchido"),
  data_nasc: z.string().min(1, "preencha a data de nascimento"),
  genre: z.enum(genreEnum),
  weigth: z
    .string()
    .transform((val) => parseInt(val))
    .pipe(z.number().gt(0, "Informe um peso válido")),
  cpf: z
    .string()
    .min(11, "informe um cpf válido")
    .max(11, "informe um cfp válido"),
  phone: z
    .string()
    .min(11, "informe um telefone válido")
    .max(11, "informe um telefone válido"),
  email: z.string().email("informe um email válido"),
});
export const returnPacientSchema = createPacientSchema.extend({
  id: z.string(),
});

export type PacientCreate = z.infer<typeof createPacientSchema>;
export type PacientReturn = z.infer<typeof returnPacientSchema>;
