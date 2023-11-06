import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const optionsMenu = [
  {
    newUse: (
      <Button
        onClick={() => {}}
        className="hover:bg-blue-200 hover:text-gray-500 hover:scale-105 transition-all px-8 py-2 w-full "
      >
        Novo Usuario
      </Button>
    ),
  },
  {
    analysts: (
      <Button
        onClick={() => {}}
        className="hover:bg-blue-200 hover:text-gray-500 hover:scale-105 transition-all px-8 py-2  w-full "
      >
        Analistas
      </Button>
    ),
  },
  {
    patients: (
      <Button
        onClick={() => {}}
        className="hover:bg-blue-200 hover:text-gray-500 hover:scale-105 transition-all px-8 py-2  w-full"
      >
        Pacientes
      </Button>
    ),
  },
  {
    Report: (
      <Button
        onClick={() => {}}
        className="hover:bg-blue-200 hover:text-gray-500 hover:scale-105 transition-all px-8 py-2  w-full"
      >
        Relatório
      </Button>
    ),
  },
];

export const MenuAdmin = () => {
  return (
    <aside className="absolute flex flex-col top-24 left-0 py-6 bg-blue-100 rounded-sm w-max">
      <div className="flex gap-2 items-center justify-center border-b pb-2 border-white ">
        <Avatar>
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>LB</AvatarFallback>
        </Avatar>
        <figcaption>{"user name "}</figcaption>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          about=""
          className="hover:bg-blue-200 hover:text-gray-600 hover:scale-105 transition-all px-8 py-2 "
          onClick={() => {
            console.log("cadastrar novo user modal");
          }}
        >
          Novo Usúario
        </Button>
        <Button
          about=""
          className="hover:bg-blue-200 hover:text-gray-600 hover:scale-105 transition-all px-8 py-2 "
          onClick={() => {
            console.log("mostrar analistas");
          }}
        >
          Analistas
        </Button>
        <Button
          about=""
          className="hover:bg-blue-200 hover:text-gray-600 hover:scale-105 transition-all px-8 py-2 "
          onClick={() => {
            console.log("mostrar Pacientes");
          }}
        >
          Pacientes
        </Button>
        <Button
          about=""
          className="hover:bg-blue-200 hover:text-gray-600 hover:scale-105 transition-all px-8 py-2 "
          onClick={() => {
            console.log("mostra relatorios ");
          }}
        >
          Relatório
        </Button>
      </div>
    </aside>
  );
};
