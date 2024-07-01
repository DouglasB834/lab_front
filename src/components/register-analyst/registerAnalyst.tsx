"use client";
import {
  RegisterData,
  registerSchema,
} from "@/app/interfaces/login.interfaces";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCloseIcon, SidebarCloseIcon } from "lucide-react";
import { isResSent } from "next/dist/shared/lib/utils";
import { useForm } from "react-hook-form";

interface IRegisterAnalystProps {
  isRegister: boolean;
  setIsRegister: (value: boolean) => void;
}

export const CadastrarAnalyst = ({
  isRegister,
  setIsRegister,
}: IRegisterAnalystProps) => {
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
    // criar modal para registar novo analista fn ADM
    <>
      {isRegister && (
        <div className="bg-gray-600 opacity-75  h-screen w-full flex items-center justify-center fixed top-0 ">
          <form
            noValidate
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col shadow-md p-4 rounded-lg gap-4 bg-gray-400"
          >
            <div className="flex justify-between items-center">
              <h3 className=" text-sm font-semibold ">Cadastrar analista</h3>
              <Button
                size={"icon"}
                className="self-end hover:text-blue-200"
                type="button"
                onClick={() => setIsRegister(false)}
              >
                <ShieldCloseIcon />
              </Button>
            </div>
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
              errorMsg={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      )}
    </>
  );
};
