import React, { lazy, Suspense, useState } from "react";
import { useApp } from "../context/AppContext";
import { WeekBoard } from "../components/WeekBoard";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { ChangeLanguage } from "../components/ChangeLanguage";

const TaskModal = lazy(() => import("../components/TaskModal").then(m => ({ default: m.TaskModal })));
const TaskListModal = lazy(() => import("../components/TaskListModal").then(m => ({ default: m.TaskListModal })));

const Dashboard = () => {
  const { theme, language } = useApp();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  
  // Days of the week based on language
  const daysOfWeek = language === "Spanish" 
    ? ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [tasks, setTasks] = useState(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );

  const handleOpenTaskModal = (day) => {
    setModalData({ type: 'task', day });
    setIsTaskModalOpen(true);
  };

  const handleOpenListModal = (day, tasks) => {
    setModalData({ type: 'list', day, tasks });
    setIsListModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsTaskModalOpen(false);
    setIsListModalOpen(false);
    setModalData({});
  };

  // Loader component for modals
  const ModalLoader = () => (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: theme === "Dark" ? "#2d2d2d" : "#fff",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        border: `1px solid ${theme === "Dark" ? "#404040" : "#e0e0e0"}`
      }}>
        <p style={{ color: theme === "Dark" ? "#fff" : "#333", margin: 0 }}>
          {language === "Spanish" ? "Cargando modal..." : "Loading modal..."}
        </p>
      </div>
    </div>
  );

  // Dynamic styles based on theme
  const dynamicStyles = {
    container: {
      minHeight: "100vh",
      backgroundColor: theme === "Dark" ? "#1a1a1a" : "#f5f5f5",
      fontFamily: "Arial, sans-serif",
      color: theme === "Dark" ? "#fff" : "#333",
      transition: "all 0.3s ease"
    },
    header: {
      backgroundColor: theme === "Dark" ? "#2d2d2d" : "#fff",
      borderBottom: `1px solid ${theme === "Dark" ? "#404040" : "#e0e0e0"}`,
      padding: "16px 0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    },
    title: {
      margin: 0,
      fontSize: "24px",
      fontWeight: "bold",
      color: theme === "Dark" ? "#fff" : "#333"
    }
  };

  return (
    <div style={dynamicStyles.container}>
      {/* Header */}
      <header style={dynamicStyles.header}>
        <div style={styles.headerContent}>
          <h1 style={dynamicStyles.title}>
            {language === "Spanish" ? "Agenda Semanal Interactiva" : "Interactive Weekly Agenda"}
          </h1>
          <div style={styles.headerActions}>
            <ThemeSwitcher />
            <ChangeLanguage />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.content}>
          <WeekBoard
            daysOfWeek={daysOfWeek}
            tasks={tasks}
            setTasks={setTasks}
            onOpenTaskModal={handleOpenTaskModal}
            onOpenListModal={handleOpenListModal}
          />
        </div>
      </main>

      {/* Lazy Loaded Modals */}
      <Suspense fallback={<ModalLoader />}>
        {isTaskModalOpen && (
          <TaskModal
            isOpen={isTaskModalOpen}
            onClose={handleCloseModals}
            selectedDay={modalData.day}
            onAddTask={(day, task) => {
              setTasks(prev => ({
                ...prev,
                [day]: [...prev[day], task]
              }));
              handleCloseModals();
            }}
          />
        )}

        {isListModalOpen && (
          <TaskListModal
            isOpen={isListModalOpen}
            onClose={handleCloseModals}
            selectedDay={modalData.day}
            tasks={modalData.tasks || []}
          />
        )}
      </Suspense>
    </div>
  );
};

// Static styles
const styles = {
  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerActions: {
    display: "flex",
    gap: "12px"
  },
  main: {
    flex: 1,
    padding: "20px 0"
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  }
};

export default Dashboard; 