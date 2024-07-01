import { Logout } from "../logout/Logout";
import { Lang } from "./Lang";

export const Header = () => {
  return (
    <header className="shadow-lg fixed top-0 left-0 w-full flex items-center justify-between py-8 bg-gray-400/30 px-4 ">
      <h1>LabSolutions </h1>
      <div className="flex gap-4">
        <Lang />
        <Logout />
      </div>
    </header>
  );
};
