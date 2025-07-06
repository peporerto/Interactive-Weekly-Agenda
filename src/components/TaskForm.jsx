import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import "../styles/components/TaskForm.css";

export const TaskForm = ({ selectedDay, onAddTask, onCancel }) => {
  const [input, setInput] = useState("");
  const { language } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onAddTask(selectedDay, input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          language === "Spanish"
            ? "Escribe tu tarea aquí..."
            : "Write your task here..."
        }
        className="task-input"
        autoFocus
      />

      <div className="task-button-container">
        <button
          type="button"
          className="task-cancel"
          onClick={onCancel}
        >
          {language === "Spanish" ? "Cancelar" : "Cancel"}
        </button>
        <button
          type="submit"
          className="task-submit"
        >
          {language === "Spanish" ? "Agregar" : "Add"}
        </button>
      </div>
    </form>
  );
};
    