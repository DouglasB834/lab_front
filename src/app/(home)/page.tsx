"use client";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/store";
import { Exemplo } from "./componets/Exemplo";

export default function Home() {
  const { user } = useUserStore();
  const router = useRouter();
  if (!user.isAdmin) {
    router.push("/login");
  }
  return (
    <main className="bg-red-300">
      <Exemplo />
    </main>
  );
}
