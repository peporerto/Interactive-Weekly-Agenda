import React from "react";
import { useApp } from "../context/AppContext";

import {RoleSelector} from "./RoleSelector";
import Dashboard from "../pages/Dashboard";


function AppRoutes() {
  const { role, setRole } = useApp();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <>
      {!role ? <RoleSelector onRoleSelect={handleRoleSelect} /> : <Dashboard />}
    </>
  );
}

export default AppRoutes;