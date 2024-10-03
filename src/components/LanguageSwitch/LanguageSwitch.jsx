// src/components/LanguageSwitcher/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      style={{ color: 'white' }}
      aria-label="Idioma"
    >
      <MenuItem value="pt">PT</MenuItem>
      <MenuItem value="en">EN</MenuItem>
      {/* Adicione mais idiomas conforme necessário */}
    </Select>
  );
};

export default LanguageSwitcher;
