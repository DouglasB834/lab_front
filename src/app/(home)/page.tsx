"use client";
import { MenuAdmin } from "@/components/aside/menuAdmin";
import { CardMenu } from "@/components/card/cardMenu";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserStore } from "../store/store";

export default function Home() {
  const { user } = useUserStore();
  const router = useRouter();
  console.log(user);
  useEffect(() => {
    if (!user.username) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <MenuAdmin />
      <main className="h-full m-auto max-w-6xl w-11/12 py-8 flex justify-center flex-wrap">
        <CardMenu />
      </main>
    </>
  );
}
