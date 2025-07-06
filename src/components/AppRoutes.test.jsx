import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppRoutes from './AppRoutes';
import { AppProvider } from '../context/AppContext';

describe('AppRoutes', () => {
  it('renders RoleSelector when no role is selected', () => {
    render(
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    );
    expect(screen.getByText(/Select your role|Selecciona tu rol/i)).toBeInTheDocument();
  });
}); 