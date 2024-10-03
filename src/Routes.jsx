// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Criando um tema personalizado com MUI
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Azul primário
    },
    secondary: {
      main: '#ff4081', // Rosa secundário
    },
  },
});

const App = () => {
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header navLinks={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contact />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
        <Footer year={new Date().getFullYear()} author="Seu Nome" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
