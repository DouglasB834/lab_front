import { create } from "zustand";
import { User } from "../interfaces/interfaces";

interface iUserStore {
  user: User;
  setUser: (user: User) => void;
}
export const useUserStore = create<iUserStore>()((set) => ({
  user: {} as User,
  setUser: (newUser: User) => set(() => ({ user: newUser })),
}));
