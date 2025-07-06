import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeekBoard } from './WeekBoard';
import { AppProvider } from '../context/AppContext';

describe('WeekBoard', () => {
  const daysOfWeek = ['Monday', 'Tuesday'];
  const tasks = { Monday: ['Task 1'], Tuesday: [] };
  it('renders TaskCard for each day', () => {
    render(
      <AppProvider>
        <WeekBoard
          daysOfWeek={daysOfWeek}
          tasks={tasks}
          setTasks={jest.fn()}
          onOpenTaskModal={jest.fn()}
          onOpenListModal={jest.fn()}
        />
      </AppProvider>
    );
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByText('Tuesday')).toBeInTheDocument();
  });
}); 