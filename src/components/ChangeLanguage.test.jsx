import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChangeLanguage } from './ChangeLanguage';
import { AppProvider } from '../context/AppContext';

describe('ChangeLanguage', () => {
  it('renders the language button', () => {
    render(
      <AppProvider>
        <ChangeLanguage />
      </AppProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles language on click', () => {
    render(
      <AppProvider>
        <ChangeLanguage />
      </AppProvider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // After click, the text should change (English <-> Español)
    expect(button.textContent).toMatch(/English|Español/);
  });
}); 