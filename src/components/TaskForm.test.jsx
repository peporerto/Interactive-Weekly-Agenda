import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskForm } from './TaskForm';
import { AppProvider } from '../context/AppContext';

describe('TaskForm', () => {
  it('renders input and buttons', () => {
    render(
      <AppProvider>
        <TaskForm selectedDay="Monday" onAddTask={jest.fn()} onCancel={jest.fn()} />
      </AppProvider>
    );
    expect(screen.getByPlaceholderText(/Write your task here|Escribe tu tarea aquí/i)).toBeInTheDocument();
    expect(screen.getByText(/Add|Agregar/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel|Cancelar/i)).toBeInTheDocument();
  });

  it('calls onAddTask when submitted', () => {
    const onAddTask = jest.fn();
    render(
      <AppProvider>
        <TaskForm selectedDay="Monday" onAddTask={onAddTask} onCancel={jest.fn()} />
      </AppProvider>
    );
    fireEvent.change(screen.getByPlaceholderText(/Write your task here|Escribe tu tarea aquí/i), { target: { value: 'Test Task' } });
    fireEvent.click(screen.getByText(/Add|Agregar/i));
    expect(onAddTask).toHaveBeenCalled();
  });

  it('calls onCancel when cancel button is clicked', () => {
    const onCancel = jest.fn();
    render(
      <AppProvider>
        <TaskForm selectedDay="Monday" onAddTask={jest.fn()} onCancel={onCancel} />
      </AppProvider>
    );
    fireEvent.click(screen.getByText(/Cancel|Cancelar/i));
    expect(onCancel).toHaveBeenCalled();
  });
}); 