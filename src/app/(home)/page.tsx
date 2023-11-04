"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserStore } from "../store/store";

export default function Home() {
  const { user } = useUserStore();
  const router = useRouter();
  useEffect(() => {
    if (!user.username) {
      router.push("/login");
    }
  }, []);
  return <main className="bg-red-300">{/* <Exemplo /> */}</main>;
}
