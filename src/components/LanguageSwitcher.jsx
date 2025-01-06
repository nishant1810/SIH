// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={languageSwitcherStyle}>
      
    </div>
  );
};

const languageSwitcherStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '10px',
};

const buttonStyle = {
  padding: '5px 10px',
  margin: '0 5px',
  border: 'none',
  backgroundColor: '#FFBF78',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default LanguageSwitcher;
