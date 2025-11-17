import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// App component removed from imports since routes are rendered directly
import { router } from "@/routes/AppRoutes";
import { ThemeProvider } from "@/context/ThemeContext";
import { I18nProvider } from "@/context/I18nContext";
import "./styles/globals.css";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);