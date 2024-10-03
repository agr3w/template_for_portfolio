// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import config from 'data/config.json';
import { Box, CircularProgress } from '@mui/material';

// Lazy load das páginas
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Portfolio = lazy(() => import('pages/PortfolioPage/Portfolio'));
const Contact = lazy(() => import('pages/ContactPage/Contact'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const TetstimonialsPage = lazy(() => import('pages/TetstimonialsPage/TetstimonialsPage'));
const SkillsPage = lazy(() => import('pages/SkillsPage/SkillsPage'));


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
         <Suspense fallback={
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
          </Box>
        }>
          <Routes>
            <Route path="/" element={<HomePage config={config} />} />
            <Route path="/portfolio" element={<Portfolio projects={config.projects} />} />
            <Route path="/contato" element={<Contact contact={config.contact} />} />
            <Route path="/sobre" element={<AboutPage config={config.site} />} />
            <Route path="/testemunhos" element={<TetstimonialsPage testimonials={config.testimonials} />} />
            <Route path="/habilidades" element={<SkillsPage skills={config.skills} />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </Suspense>
        <Footer year={new Date().getFullYear()} author={site.author} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
