import { Logout } from "../logout/Logout";

export const Header = () => {
  return (
    <header className="shadow-lg fixed top-0 left-0 w-full flex items-center justify-center py-8 bg-gray-400/30">
      <h1>LabSolutions </h1>
      <Logout />
    </header>
  );
};
