import React from "react";
import { useApp } from "../context/AppContext";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useApp();

  const toggleTheme = () => {
    const newTheme = theme === "Light" ? "Dark" : "Light";
    setTheme(newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: "8px 16px",
        backgroundColor: theme === "Light" ? "#333" : "#fff",
        color: theme === "Light" ? "#fff" : "#333",
        border: "1px solid #ccc",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "all 0.3s ease"
      }}
    >
      {theme === "Light" ? "🌙" : "☀️"}
      {theme === "Light" ? "Modo Oscuro" : "Modo Claro"}
    </button>
  );
};