import { create } from "zustand";
import { User } from "../interfaces/login.interfaces";

interface iUserStore {
  user: User;
  setUser: (user: User) => void;
}
export const useUserStore = create<iUserStore>()((set) => ({
  user: {} as User,
  setUser: (newUser: User) => set(() => ({ user: newUser })),
}));
