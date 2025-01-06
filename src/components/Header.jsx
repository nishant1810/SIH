import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import './Header.css'; // Import CSS
import { Link } from 'react-router-dom';
import translateText from '../services/translateText'; // Adjusted path based on your folder structure

const Header = () => {
  const { t, i18n } = useTranslation(); // For translations
  const [searchText, setSearchText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Detect scroll position to change header background color
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50); // Change background if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (searchText.trim() === '') {
      setError(t('error.empty_search', 'Please enter text to search.'));
      return;
    }
    setError(''); // Reset error state
    try {
      const translation = await translateText(searchText);
      if (translation) {
        setTranslatedText(translation);
      } else {
        setError(t('error.translation_failed', 'Translation failed.'));
      }
    } catch (e) {
      setError(t('error.api_failure', 'Error occurred while translating.'));
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}> {/* Apply class based on scroll */}
      <nav className="header-container">
        {/* Logo linked to Home Page */}
        <div className="logo-container">
          <Link to="/">
            <img 
              src="./logo.png" // Ensure this path is correct
              alt={t('logo_secondary', 'Logo')} 
              className="right-logo"
            />
          </Link>
        </div>

        {/* Centered Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder={t('search_placeholder', 'Enter scheme name to search...')}
              className="search-input"
              value={searchText}
              onChange={handleSearchChange}
            />
            <i 
              className="fas fa-search search-icon"
              style={{ cursor: 'pointer' }}
              onClick={handleSearchSubmit} // Trigger translation on search click
            ></i>
          </div>
          {translatedText && <p>Translated: {translatedText}</p>} {/* Display translation */}
          {error && <p className="error-text">{error}</p>} {/* Display error message */}
        </div>

        {/* Right-aligned elements: Language Switch and Sign-In Button */}
        <div className="right-elements">
          <div className="language-switch">
            <i className="fas fa-language" style={{ cursor: 'pointer' }}></i>
            <span onClick={() => handleLanguageChange('en')} className="language-option" style={{ cursor: 'pointer' }}>Eng</span>
            <span onClick={() => handleLanguageChange('hi')} className="language-option" style={{ cursor: 'pointer' }}>हिंदी</span>
          </div>

          <Link to="/login">
            <button className="sign-in-button">
              {t('log_in', 'Log In')} <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
