// src/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { login, register, getUserProfile } from "@/api/userService";
import { useUserStore } from "@/store/userStore";

export const useAuth = () => {
  const { user, setUser, logout: clearUser } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    const res = await login( email, password );
    if (res.success) setUser(res.user, res.token);
    setLoading(false);
    return res;
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    setLoading(true);
    const res = await register( name, email, password );
    if (res.success) setUser(res.user, null );
    setLoading(false);
    return res;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearUser();
  };
  
useEffect(() => {
  const fetchProfile = async () => {
    const profile = await getUserProfile();
    const token = localStorage.getItem("token"); // se usa solo para sincronizar el estado
    if (profile) setUser(profile, token);
  };
  fetchProfile();
}, [setUser]);

  return { user, loading, handleLogin, handleRegister, handleLogout };
};
