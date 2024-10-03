// src/pages/Portfolio.jsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import styles from './Portfolio.module.css';
import ProjectCard from 'components/ProjectCard/ProjectCard';


const Portfolio = ({ projects }) => {
  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Projetos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard 
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
