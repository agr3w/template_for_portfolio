// src/pages/Portfolio.jsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import styles from './Portfolio.module.css';
import Testimonials from '../components/Terstimonials/Testimonials';
import About from '../components/About/About';
import ProjectCard from '../components/ProjectCard/ProjectCard';


const Portfolio = () => {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1.',
      image: '/images/projeto1.png',
      link: 'https://github.com/seu-usuario/projeto1',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: '/images/projeto2.png',
      link: 'https://github.com/seu-usuario/projeto2',
    },
    // Adicione mais projetos conforme necessário
  ];

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

      {/* Seção Sobre */}
      <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Sobre Mim
      </Typography>
      <About 
        description="Olá! Sou um desenvolvedor React.js apaixonado por criar interfaces incríveis."
        avatar="/images/avatar.png"
      />

      {/* Seção Testemunhos */}
      <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Testemunhos
      </Typography>
      <Testimonials 
        testimonials={[
          { quote: "Excelente trabalho!", author: "Cliente A" },
          { quote: "Muito profissional e dedicado.", author: "Cliente B" },
          // Adicione mais testemunhos conforme necessário
        ]}
      />
    </Container>
  );
};

export default Portfolio;
