// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

const Footer = ({ year, author }) => {
  const { t } = useTranslation();

  return (
    <Box className={styles.footer}>
      <Typography variant="body2" color="inherit">
        &copy; {year} {author}. {t('Footer.Rigths')}.
      </Typography>
    </Box>
  );
};

export default Footer;
