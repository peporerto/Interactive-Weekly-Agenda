import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCard } from './TaskCard';
import { AppProvider } from '../context/AppContext';

describe('TaskCard', () => {
  const defaultProps = {
    day: 'Monday',
    tasks: ['Task 1', 'Task 2'],
    onAddTask: jest.fn(),
    onViewTasks: jest.fn(),
  };

  function renderWithProvider(props = {}) {
    return render(
      <AppProvider>
        <TaskCard {...defaultProps} {...props} />
      </AppProvider>
    );
  }

  it('renders the day and task count', () => {
    renderWithProvider();
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByText(/2 (tasks|tareas)/i)).toBeInTheDocument();
  });

  it('calls onAddTask when Add Task button is clicked', () => {
    renderWithProvider();
    const addButton = screen.getByText(/(Add Task|Agregar Tarea)/i);
    fireEvent.click(addButton);
    expect(defaultProps.onAddTask).toHaveBeenCalledWith('Monday');
  });

  it('calls onViewTasks when View Tasks button is clicked', () => {
    renderWithProvider();
    const viewButton = screen.getByText(/(View Tasks|Ver Tareas)/i);
    fireEvent.click(viewButton);
    expect(defaultProps.onViewTasks).toHaveBeenCalledWith('Monday', ['Task 1', 'Task 2']);
  });

  // Example for Spanish (would require context manipulation or a custom provider)
  // it('shows Spanish text when language is Spanish', () => {
  //   // This is a placeholder for a more advanced context test
  // });
}); 