import React, { createContext, useState, useContext, useEffect } from 'react';

// type UserContextType = {
//   nombre: string;
//   setNombre: (nombre: string) => void;
// };

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState("Light");
    const [language, setLanguage] = useState("Spanish");
    const [role, setRole] = useState();

    // Apply theme to the document
    useEffect(() => {
        const themeValue = theme === "Dark" ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', themeValue);
        document.body.setAttribute('data-theme', themeValue);
        console.log('Theme applied:', themeValue);
    }, [theme]);

    return (
        <AppContext.Provider
            value={{ theme, setTheme, language, setLanguage, role, setRole }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};