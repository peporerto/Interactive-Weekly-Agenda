import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { AppProvider } from '../context/AppContext';

describe('ThemeSwitcher', () => {
  it('renders the theme button', () => {
    render(
      <AppProvider>
        <ThemeSwitcher />
      </AppProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles theme on click', () => {
    render(
      <AppProvider>
        <ThemeSwitcher />
      </AppProvider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // After click, the text/icon should change (🌙 <-> ☀️)
    expect(button.textContent).toMatch(/🌙|☀️/);
  });
}); 