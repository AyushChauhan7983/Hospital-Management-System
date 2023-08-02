import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppointmentsContextProvider } from './context/AppointmentContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppointmentsContextProvider>
        <App />
      </AppointmentsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
