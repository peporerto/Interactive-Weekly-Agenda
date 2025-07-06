import React from 'react';
import { render, screen } from '@testing-library/react';
import { TaskModal } from './TaskModal';
import { AppProvider } from '../context/AppContext';

describe('TaskModal', () => {
  it('does not render when closed', () => {
    render(
      <AppProvider>
        <TaskModal isOpen={false} onClose={jest.fn()} selectedDay="Monday" onAddTask={jest.fn()} />
      </AppProvider>
    );
    expect(screen.queryByText(/Add Task|Agregar Tarea/i)).not.toBeInTheDocument();
  });

  it('renders TaskForm when open', () => {
    render(
      <AppProvider>
        <TaskModal isOpen={true} onClose={jest.fn()} selectedDay="Monday" onAddTask={jest.fn()} />
      </AppProvider>
    );
    expect(screen.getByText(/Add Task|Agregar Tarea/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add|Agregar/i })).toBeInTheDocument();
  });
}); 