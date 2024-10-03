// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pt from './locales/pt.json';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // idioma padrão
    fallbackLng: 'pt',

    interpolation: {
      escapeValue: false, // React já faz escape
    },
  });

export default i18n;
