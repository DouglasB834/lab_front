"use client";
import { useUserStore } from "@/app/store/store";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const Logout = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setUser } = useUserStore();

  const logout = () => {
    setUser({ username: "", password: "", isAdmin: false });
    router.push("/login");
  };
  return (
    pathname !== "/login" && (
      <Button
        onClick={logout}
        className="absolute bottom-0 right-12 bg-gray-500/50"
      >
        Logout
      </Button>
    )
  );
};
