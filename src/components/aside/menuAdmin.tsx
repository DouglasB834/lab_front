import Link from "next/link";

export const MenuAdmin = () => {
  return (
    <aside className="absolute top-24 left-0 p-6 bg-blue-100 rounded-sm w-max">
      <Link href="/cadastrar">Cadastrar novo usuário</Link>
    </aside>
  );
};
