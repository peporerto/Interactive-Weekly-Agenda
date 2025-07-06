import React from 'react';
import { AppProvider } from './context/AppContext';
import AppRoutes from './components/AppRoutes';
import './styles/themes/variables.css';
import './styles/utilities/utilities.css';
import './styles/base/base.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AppProvider>
  );
}

export default App;
