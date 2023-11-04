"use client";
import { Header } from "@/components/header/header";
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
  return (
    <>
      <Header />
      <main className="bg-red-300 h-full m-auto max-w-6xl"></main>
    </>
  );
}
