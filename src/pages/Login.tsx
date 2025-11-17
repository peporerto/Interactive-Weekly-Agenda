// src/pages/Login.tsx
import React, { useState } from "react";
import { useI18n } from "@/context/I18nContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";



export const LoginPage = () => {
  const { t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login attempt: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      <div className="w-full max-w-md p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{t("login")}</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder={t("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <Button type="submit" className="w-full py-2">{t("login")}</Button>
        </form>

        {/* Botón para cambiar tema */}
        <Button
          className="mt-4 w-full py-2"
          onClick={toggleTheme}
        >
          {theme === "dark" ? t("lightMode") : t("darkMode")}
        </Button>
      </div>
    </div>
  );
};