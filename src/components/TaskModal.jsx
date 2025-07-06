import React from "react";
import { TaskForm } from "./TaskForm";
import { useApp } from "../context/AppContext";
import "../styles/components/TaskModal.css";

export const TaskModal = ({ isOpen, onClose, selectedDay, onAddTask }) => {
  const { language } = useApp();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {language === "Spanish" ? "Agregar Tarea" : "Add Task"} - {selectedDay}
          </h2>
          <button
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <TaskForm
          selectedDay={selectedDay}
          onAddTask={onAddTask}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};
