"use client";
import { MenuAdmin } from "@/components/aside/menuAdmin";
import { CardMenu } from "@/components/card/cardMenu";

import { useUserStore } from "../store/store";

export default function Home() {
  const { user } = useUserStore();
  console.log(user, " hommeeeee ");
  return (
    <>
      <MenuAdmin />
      <main className="m-auto mt-20 max-w-6xl w-11/12 py-8 flex justify-center flex-wrap">
        <CardMenu />
      </main>
    </>
  );
}
