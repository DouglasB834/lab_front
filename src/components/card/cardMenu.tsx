import { PlusCircle } from "lucide-react";
export const CardMenu = () => {
  return (
    <button className="flex gap-6 flex-col items-end bg-gray-200 w-max p-5 rounded-md shadow-lg">
      <h3 className="text-blue-400 font-bold uppercase">Cadastrar coleta</h3>
      <div>
        <PlusCircle color="blue" />
      </div>
    </button>
  );
};
