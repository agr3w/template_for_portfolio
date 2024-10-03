// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={`${title} screenshot`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer">
          Ver Projeto
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
