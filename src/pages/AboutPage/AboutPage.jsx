// src/pages/Sobre.jsx
import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';
import styles from './AboutPage.module.css';

const AboutPage = ({ config }) => {
  return (
    <Container className={styles.sobre}>
      <Typography variant="h4" gutterBottom>
        Sobre Mim
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Avatar
            alt="Avatar"
            src={config.avatar}
            sx={{ width: 200, height: 200 }}
            className={styles.avatar}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1">
            {config.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
