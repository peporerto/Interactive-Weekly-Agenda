import { create } from "zustand";
import type { User } from "@/types/user";

interface UserState {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string | null) => void;
  logout: () => void;
}
export const useUserStore = create<UserState>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
 setUser: (user, token) => {
  if (token) localStorage.setItem("token", token);
  else localStorage.removeItem("token");
  set({ user, token });
},
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
