import React from "react";
import { TaskCard } from "./TaskCard";

export const WeekBoard = ({ daysOfWeek, tasks, setTasks, onOpenTaskModal, onOpenListModal }) => {
    return (
        <div className="grid grid-auto-fit gap-lg py-lg">
            {daysOfWeek.map((day) => (
                <TaskCard
                    key={day}
                    day={day}
                    tasks={tasks[day] || []}
                    onAddTask={() => onOpenTaskModal(day)}
                    onViewTasks={() => onOpenListModal(day, tasks[day] || [])}
                />
            ))}
        </div>
    );
};

export default WeekBoard;