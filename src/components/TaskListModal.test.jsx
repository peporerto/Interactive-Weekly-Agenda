import React from 'react';
import { render, screen } from '@testing-library/react';
import { TaskListModal } from './TaskListModal';
import { AppProvider } from '../context/AppContext';

describe('TaskListModal', () => {
  it('does not render when closed', () => {
    render(
      <AppProvider>
        <TaskListModal isOpen={false} onClose={jest.fn()} selectedDay="Monday" tasks={[]} />
      </AppProvider>
    );
    expect(screen.queryByText(/Tasks for|Tareas de/i)).not.toBeInTheDocument();
  });

  it('renders empty message when no tasks', () => {
    render(
      <AppProvider>
        <TaskListModal isOpen={true} onClose={jest.fn()} selectedDay="Monday" tasks={[]} />
      </AppProvider>
    );
    expect(screen.getByText(/No tasks for this day|No hay tareas para este día/i)).toBeInTheDocument();
  });

  it('renders tasks when present', () => {
    render(
      <AppProvider>
        <TaskListModal isOpen={true} onClose={jest.fn()} selectedDay="Monday" tasks={["Task 1", "Task 2"]} />
      </AppProvider>
    );
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
}); 