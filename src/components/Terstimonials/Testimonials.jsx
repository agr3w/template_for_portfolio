// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import styles from './Testimonials.module.css';
import { Typography, Grid, Paper } from '@mui/material';

const Testimonials = ({ testimonials }) => {
  return (
    <div className={styles.testimonials}>
      <Typography variant="h5" gutterBottom>
        O que dizem nossos clientes
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
    </div>
  );
};

export default Testimonials;
