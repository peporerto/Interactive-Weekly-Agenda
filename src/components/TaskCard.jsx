import React from "react";
import { useApp } from "../context/AppContext";
import "../styles/components/TaskCard.css";

export const TaskCard = ({ day, tasks, onAddTask, onViewTasks }) => {
  const { language } = useApp();

  return (
    <div className="task-card">
      <h3 className="task-title">{day}</h3>

      <p className="task-count">
        {language === "Spanish"
          ? `${tasks.length} tarea${tasks.length !== 1 ? "s" : ""}`
          : `${tasks.length} task${tasks.length !== 1 ? "s" : ""}`}
      </p>

      <div className="task-buttons">
        <button className="btn-add" onClick={() => onAddTask(day)}>
          {language === "Spanish" ? "Agregar Tarea" : "Add Task"}
        </button>
        <button className="btn-view" onClick={() => onViewTasks(day, tasks)}>
          {language === "Spanish" ? "Ver Tareas" : "View Tasks"}
        </button>
      </div>
    </div>
  );
};





