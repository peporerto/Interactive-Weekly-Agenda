// src/components/layout/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </>
  );
};

export default MainLayout;