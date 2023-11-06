import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { CreatePacient } from "../pacient/createPacient";
import { Button } from "../ui/button";
export const CardMenu = () => {
  const [component, setComponent] = useState("");
  const components = {
    coleta: <Button>Coleta legal</Button>,
    paciente: <CreatePacient />,
  };
  const defineComponent = (name: string) => {
    console.log(name);
    setComponent(name);
    // setComponent(components[name as keyof c]);
  };
  return (
    <>
      <button
        onClick={() => defineComponent("coleta")}
        className="flex gap-6 flex-col items-end bg-gray-200 w-max p-5 rounded-md shadow-lg"
      >
        <h3 className="text-blue-400 font-bold uppercase">Cadastrar coleta</h3>
        <div>
          <PlusCircle color="blue" />
        </div>
      </button>
      <button
        onClick={() => defineComponent("paciente")}
        className="flex gap-6 flex-col items-end bg-gray-200 w-max p-5 rounded-md shadow-lg"
      >
        <h3 className="text-blue-400 font-bold uppercase">
          Cadastrar paciente
        </h3>
        <div>
          <PlusCircle color="blue" />
        </div>
      </button>
      {components[component as keyof typeof components]}
    </>
  );
};
