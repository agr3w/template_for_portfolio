// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageSwitcher from 'components/LanguageSwitch/LanguageSwitch';
import { Brightness1Outlined, DarkModeOutlined } from '@mui/icons-material';

const Header = ({ navLinks, title, socialLinks, toggleTheme, currentTheme }) => {
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'LinkedInIcon':
        return <LinkedInIcon />;
      case 'GitHubIcon':
        return <GitHubIcon />;
      // Adicione mais cases para outros ícones
      default:
        return null;
    }
  };

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" component="div" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={link.path}
              className={styles.navButton}
            >
              {link.name}
            </Button>
          ))}
        </div>
        <div className={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              color="inherit"
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {renderSocialIcon(social.icon)}
            </IconButton>
          ))}
        </div>
        <LanguageSwitcher />
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit" aria-label="Trocar Tema">
          {currentTheme === 'dark' ? <Brightness1Outlined /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
