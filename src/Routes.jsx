// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import config from 'data/config.json';
import HomePage from 'pages/HomePage/HomePage';
import Portfolio from 'pages/PortfolioPage/Portfolio';
import Contact from 'pages/ContactPage/Contact';
import AboutPage from 'pages/AboutPage/AboutPage';
import TetstimonialsPage from 'pages/TerstimonialsPage/TetstimonialsPage';
import SkillsPage from 'pages/SkillsPage/SkillsPage';

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
  const { site } = config;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Header 
          navLinks={site.navLinks} 
          title={site.title} 
          socialLinks={site.socialLinks} 
        />
        <Routes>
          <Route path="/" element={<HomePage config={config} />} />
          <Route path="/portfolio" element={<Portfolio projects={config.projects} />} />
          <Route path="/contato" element={<Contact contact={config.contact} />} />
          <Route path="/sobre" element={<AboutPage config={config.site} />} />
          <Route path="/testemunhos" element={<TetstimonialsPage testimonials={config.testimonials} />} />
          <Route path="/habilidades" element={<SkillsPage skills={config.skills} />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
        <Footer year={new Date().getFullYear()} author={site.author} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
