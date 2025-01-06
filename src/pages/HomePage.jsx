import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
import TabComponent from '../components/TabComponent'; // Import the TabComponent
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  
  // Video source
  const videoSource = '/slides.mp4'; // Ensure this path is correct relative to the public directory

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homePage">
      <LanguageSwitcher />
      <main className="mainStyle">
        <video
          src={videoSource} // Use the videoSource variable here
          autoPlay
          loop
          muted
          className="mainVideoStyle" // Add a custom class for styling
        />
      </main>

     

      <div style={{ textAlign: 'center', marginTop: '-10px', marginBottom: '50px' }}>
        <Link to="/population-chart" className="ctaButtonStyle">
          {t('view_data_statistics')}
        </Link>
      </div>

      {/* Add the TabComponent here */}
      <TabComponent />

      <div>
        <HeroSection showCTAButton={true} /> {/* Show apply button in the second HeroSection */}
      </div>

      <Footer />
    </div>
  );
};

// HeroSection component
function HeroSection({ showCTAButton }) {
  const { t } = useTranslation();

  return (
    <section id="hero" className="sectionStyle">
      <div className="contentStyle">
        <h2>{t('hero_title')}</h2>
        <p>{t('hero_description')}</p>
        {showCTAButton && ( // Conditionally render the Apply button
          <Link to="/apply" className="ctaButtonStyle">
            {t('cta_button_apply')}
          </Link>
        )}
      </div>
    </section>
  );
}

export default HomePage;
