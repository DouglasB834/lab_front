"use client";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "../interfaces/interfaces";

export default function Cadastrar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });
  const handleRegister = (data: RegisterData) => {
    //SÓ ESPERAR OS GURIS ENTREGAREM O REGISTER DE USUÁRIOS
    console.log(data);
  };
  return (
    <main className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <form
        noValidate
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col shadow-md p-4 rounded-lg gap-4"
      >
        <Input
          label="usuário"
          placeholder="usuário..."
          register={register("username")}
          errorMsg={errors.username && errors.username.message}
        />
        <Input
          label="senha"
          placeholder="a senha do usuário..."
          register={register("password")}
          type="password"
          errorMsg={errors.password && errors.password.message}
        />
        <Input
          label="confirme a senha"
          placeholder="a senha do usuário..."
          register={register("confirmPassword")}
          type="password"
          errorMsg={errors.confirmPassword && errors.confirmPassword.message}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </main>
  );
}
