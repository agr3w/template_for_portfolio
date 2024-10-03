// src/pages/Testemunhos.jsx
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import styles from './TestimonialsPage.module.css';

const TestimonialsPage = ({ testimonials }) => {
  return (
    <Container className={styles.testemunhos}>
      <Typography variant="h4" gutterBottom>
        Testemunhos
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} className={styles.testimonial}>
              <Typography variant="body1" gutterBottom>
                "{testimonial.quote}"
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                - {testimonial.author}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsPage;
