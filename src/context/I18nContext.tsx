import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface I18nContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    welcome: "Welcome to SoftSkill",
    improveSkills: "Improve your professional skills through practical exercises and interactive evaluations.",
    login: "Login",
    register: "Register",
    getStarted: "Get Started",
    home: "Home",
    tests: "Tests",
    profile: "Profile",
    logout: "Logout",
    email: "Email",
    password: "Password",
    name: "Name",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    selectTest: "Select a Test",
    startTest: "Start Test",
    testDetail: "Test Detail",
    testInstructions: "Read the instructions carefully before starting the test.",
    testResult: "Test Result",
    resultMessage: "Here is your test result. Analyze it to improve your skills.",
  },
  es: {
    welcome: "Bienvenido a SoftSkill",
    improveSkills: "Mejora tus habilidades profesionales a través de ejercicios prácticos y evaluaciones interactivas.",
    login: "Iniciar sesión",
    register: "Registrarse",
    getStarted: "Comenzar",
    home: "Inicio",
    tests: "Pruebas",
    profile: "Perfil",
    logout: "Cerrar sesión",
    email: "Correo",
    password: "Contraseña",
    name: "Nombre",
    darkMode: "Modo Oscuro",
    lightMode: "Modo Claro",
    selectTest: "Selecciona un Test",
    startTest: "Comenzar Test",
    testDetail: "Detalle del Test",
    testInstructions: "Lee las instrucciones cuidadosamente antes de comenzar el test.",
    testResult: "Resultado del Test",
    resultMessage: "Aquí está tu resultado del test. Analízalo para mejorar tus habilidades.",
  },
};

const I18nContext = createContext<I18nContextProps>({
  language: "en",
  setLanguage: () => { },
  t: (key: string) => key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
