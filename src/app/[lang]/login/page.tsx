"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  LoginData,
  User,
  loginSchema,
} from "../../interfaces/login.interfaces";
import { useUserStore } from "../../store/store";
import { FormContainer } from "@/components/ComponentsForms";
import { HeartIcon } from "lucide-react";

const Login = () => {
  const { setUser } = useUserStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const handleLogin = (data: LoginData) => {
    //AQUI MANDA LOGIN E RETORNA AS INFOS DO USUÁRIO PARA COMPLEMENTAR O STATE
    const userToStore: User = { ...data, isAdmin: false };

    Cookie.set("user", userToStore.username, { expires: 1 });

    console.log(data);
    setUser(userToStore);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <main className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <FormContainer.Form hasSubmit={handleSubmit(handleLogin)}>
        <FormContainer.Input
          label="usuário"
          placeholder="usuário"
          register={register("username")}
          errorMsg={errors.username && errors.username.message}
        />
        <FormContainer.Input
          register={register("password")}
          label="senha"
          placeholder="senha..."
          type="password"
          errorMsg={errors.password && errors.password.message}
        />
        <FormContainer.Button text="Entrar" type="submit" />
      </FormContainer.Form>

      {/* <form
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
      </form> */}
    </main>
  );
};

export default Login;
