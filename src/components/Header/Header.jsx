// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Header = ({ navLinks }) => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" component="div" className={styles.title}>
          Meu Portfólio
        </Typography>
        <div>
          {navLinks.map((link, index) => (
            <Button
            color="inherit"
            component={Link}
            to={link.path}
            startIcon={index === 0 ? <HomeIcon /> : <ContactMailIcon />}
          >
            {link.name}
          </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
