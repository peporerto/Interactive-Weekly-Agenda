import React from "react";
import { useApp } from "../context/AppContext";
import "../styles/components/TaskListModal.css";

export const TaskListModal = ({ isOpen, onClose, selectedDay, tasks }) => {
  const { language } = useApp();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {language === "Spanish" ? "Tareas de" : "Tasks for"} {selectedDay}
          </h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-message">
            {language === "Spanish" ? "No hay tareas para este día" : "No tasks for this day"}
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
