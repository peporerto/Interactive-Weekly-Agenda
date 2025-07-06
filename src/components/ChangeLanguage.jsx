import React from "react";
import { useApp } from '../context/AppContext';

export const ChangeLanguage = () => {
  const { language, setLanguage } = useApp();

  const toggleLanguage = () => {
    const newLanguage = language === "Spanish" ? "English" : "Spanish";
    setLanguage(newLanguage);
  };

  return (
    <button 
      onClick={toggleLanguage}
      style={{
        padding: "8px 16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "all 0.3s ease"
      }}
    >
      {language === "Spanish" ? "🇺🇸" : "🇪🇸"}
      {language === "Spanish" ? "English" : "Español"}
    </button>
  );
}; 