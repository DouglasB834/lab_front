import Link from "next/link";

export const MenuAdmin = () => {
  return (
    <aside className="absolute flex flex-col top-24 left-0 py-6 bg-blue-100 rounded-sm w-max">
      <Link
        href="/"
        className="hover:bg-blue-200 hover:text-gray-500 hover:scale-105 transition-all px-8 py-2 "
      >
        Início
      </Link>
      <Link
        href="/cadastrar"
        className="hover:bg-blue-200 hover:scale-105 hover:text-gray-500 transition-all px-8 py-2"
      >
        Novo usuário
      </Link>
    </aside>
  );
};
