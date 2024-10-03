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
        {t('view_projects')}
      </Button>
       {/* Seção Sobre */}
       <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
       {t('about_me')}
      </Typography>
      <About 
        description={t('about_description')}
        avatar="/images/avatar.png"
      />
    </Container>
  );
};

export default HomePage;
