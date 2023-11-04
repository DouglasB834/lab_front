"use client";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "../interfaces/interfaces";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),

    mode: "onChange",
  });
  const handleLogin = (data: LoginData) => {
    console.log(data);
  };
  return (
    <main className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <form
        noValidate
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col shadow-md p-4 rounded-lg gap-4"
      >
        <Input
          register={register("username")}
          label="usuário"
          placeholder="usuário..."
          errorMsg={errors.username && errors.username.message}
        />
        <Input
          register={register("password")}
          label="senha"
          placeholder="senha..."
          type="password"
          errorMsg={errors.password && errors.password.message}
        />
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
};

export default Login;
