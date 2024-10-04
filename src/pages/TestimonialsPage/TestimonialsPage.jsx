// src/pages/Testemunhos.jsx
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import styles from './TestimonialsPage.module.css';
import { useTranslation } from 'react-i18next';

const TestimonialsPage = ({ testimonials }) => {
  const { t } = useTranslation();
  return (
    <Container className={styles.testemunhos}>
      <Typography variant="h4" gutterBottom>
        {t('testimonials.name_page')}
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} className={styles.testimonial}>
              <Typography variant="body1" gutterBottom>
                "{t(`testimonials.${testimonial.quote}`)}"
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                - {t(`testimonials.${testimonial.author}`)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsPage;
