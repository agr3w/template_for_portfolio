// src/components/Skills/Skills.jsx
import React from 'react';
import { Typography, Grid, LinearProgress, Box } from '@mui/material';
import styles from './Skills.module.css';

const Skills = ({ skills }) => {
  return (
    <Box className={styles.skills}>
      <Typography variant="h4" gutterBottom>
        Habilidades
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="h6">{skill.name}</Typography>
            <LinearProgress variant="determinate" value={getProgressValue(skill.level)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const getProgressValue = (level) => {
  switch (level.toLowerCase()) {
    case 'iniciante':
      return 25;
    case 'intermediário':
      return 50;
    case 'avançado':
      return 75;
    case 'expert':
      return 100;
    default:
      return 50;
  }
};

export default Skills;
