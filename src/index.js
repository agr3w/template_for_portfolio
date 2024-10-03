import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import App from './Routes';
import './i18n/i18n'; // Importa a configuração do i18n

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
