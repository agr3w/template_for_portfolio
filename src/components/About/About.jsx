// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const About = ({ description, avatar }) => {
  return (
    <Grid container alignItems="center" spacing={2} className={styles.about}>
      <Grid item>
        <Avatar alt="Avatar" src={avatar} className={styles.avatar} />
      </Grid>
      <Grid item xs>
        <Typography variant="body1">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default About;
