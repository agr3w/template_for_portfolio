// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <Container className={styles.home}>
      <Typography variant="h2" gutterBottom>
        Bem-vindo ao Meu Portfólio
      </Typography>
      <Typography variant="h5" gutterBottom>
        Desenvolvedor React.js especializado em criar interfaces incríveis e funcionais.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/portfolio">
        Ver Projetos
      </Button>
    </Container>
  );
};

export default HomePage;
