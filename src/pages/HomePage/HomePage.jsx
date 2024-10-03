// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';
import About from 'components/About/About';

const HomePage = ({ config }) => {
  const { site } = config;
  const { t } = useTranslation();

  return (
    <Container className={styles.home}>
      <Typography variant="h2" gutterBottom>
        {t(site.title)}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t(site.description)}
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/portfolio">
        Ver Projetos
      </Button>
       {/* Seção Sobre */}
       <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Sobre Mim
      </Typography>
      <About 
        description="Olá! Sou um desenvolvedor React.js apaixonado por criar interfaces incríveis."
        avatar="/images/avatar.png"
      />
    </Container>
  );
};

export default HomePage;
