// src/pages/Portfolio.jsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import styles from './Portfolio.module.css';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import { useTranslation } from 'react-i18next';


const Portfolio = ({ projects }) => {
  const { t } = useTranslation();
  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom>
        {t('Projects.name_page')}
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard 
              title={t(`Projects.${project.title}`)}
              description={t(`Projects.${project.description}`)}
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
