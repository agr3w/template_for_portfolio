// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = ({ year, author }) => {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2" color="inherit">
        &copy; {year} {author}. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
