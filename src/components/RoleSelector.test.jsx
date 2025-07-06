import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RoleSelector } from './RoleSelector';
import { AppProvider } from '../context/AppContext';

describe('RoleSelector', () => {
  it('calls onRoleSelect when a role is selected and confirmed', () => {
    const onRoleSelect = jest.fn();

    render(
      <AppProvider>
        <RoleSelector onRoleSelect={onRoleSelect} />
      </AppProvider>
    );

    // Cambia el rol
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Administrador' },
    });

    // Encuentra el botón
    const confirmButton = screen.getByRole('button'); // o usa getByTestId si lo agregas

    expect(confirmButton).not.toBeDisabled();
    fireEvent.click(confirmButton);
    expect(onRoleSelect).toHaveBeenCalledWith('Administrador');
  });
});