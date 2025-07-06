import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import "../styles/components/RoleSelector.css";

export const RoleSelector = ({ onRoleSelect }) => {
  const { theme, language } = useApp();
  const [selectedRole, setSelectedRole] = useState("");

  const roles = language === "Spanish" 
    ? ["Administrador", "Usuario", "Invitado"]
    : ["Administrator", "User", "Guest"];

  const handleConfirm = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
 <div className={`role-selector ${theme === "Dark" ? "dark" : "light"}`}>
  <h2 className="role-title">
    {language === "Spanish" ? "Selecciona tu rol" : "Select your role"}
  </h2>

  <label className={`role-label ${theme === "Dark" ? "dark" : ""}`}>
    {language === "Spanish" ? "Rol:" : "Role:"}
  </label>

  <select
    className={`role-select ${theme === "Dark" ? "dark" : ""}`}
    value={selectedRole}
    onChange={(e) => setSelectedRole(e.target.value)}
  >
    <option value="">
      {language === "Spanish" ? "Selecciona un rol..." : "Select a role..."}
    </option>
    {roles.map((role) => (
      <option key={role} value={role}>
        {role}
      </option>
    ))}
  </select>

  {selectedRole && (
    <p className={`role-selected-text ${theme === "Dark" ? "dark" : ""}`}>
      {language === "Spanish" ? "Rol seleccionado: " : "Selected role: "}
      <span className={`role-selected-role ${theme === "Dark" ? "dark" : ""}`}>
        {selectedRole}
      </span>
    </p>
  )}

  <div className="button-container">
    <button
      className={`confirm-button ${!selectedRole ? "disabled" : ""}`}
      onClick={handleConfirm}
      disabled={!selectedRole}
    >
      {language === "Spanish" ? "Confirmar" : "Confirm"}
    </button>
  </div>
</div>

  );
};
