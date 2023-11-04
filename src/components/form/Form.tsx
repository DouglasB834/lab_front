import { Button } from "../ui/button";

export const Form = () => {
  return (
    <form className="flex flex-col shadow-md p-4 rounded-lg gap-4">
      <label htmlFor="username">Usuário</label>
      <input className="bg-gray-100" type="text" id="username" />
      <label htmlFor="password">Senha</label>
      <input className="bg-gray-100" type="password" id="password" />
      <Button>Entrar</Button>
    </form>
  );
};
