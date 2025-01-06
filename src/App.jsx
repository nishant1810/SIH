import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import PopulationChart from './components/PopulationChart';
import './i18n';
import AboutUs from './components/AboutUs';
import GovernmentSchemes from './components/GovernmentSchemes';
import LoginPage from './pages/LoginPage';
import FilterPanel from './components/FilterPanel';
import StatesUTsPage from './components/StatesUTsPage';
import CentralMinistriesPage from './components/CentralMinistriesPage';
import Dashboard from './pages/Dashboard'; // Import Dashboard component
import translateText from './services/translateText'; // Ensure translateText path is correct
import Chatbot from './components/Chatbot'; // Import Chatbot component

function App() {
  const [translatedText, setTranslatedText] = useState('');

  // Function to translate text using translateText
  const handleTranslation = async (text) => {
    try {
      const translation = await translateText(text);
      setTranslatedText(translation);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Translation failed.');
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Pass handleTranslation function as a prop to Header */}
        <Header handleTranslation={handleTranslation} />

        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home route */}
          <Route path="/AboutUs" element={<AboutUs />} /> {/* About Us route */}
          <Route path="/government-schemes" element={<GovernmentSchemes />} />
          <Route path="/states-uts" element={<StatesUTsPage />} />
          <Route path="/central-ministries" element={<CentralMinistriesPage />} />
          <Route path="/filter-panel/:ministryName" element={<FilterPanel />} />
          {/* <Route path="/filter-panel" element={<FilterPanel />} /> */}
          <Route path="/apply" element={<Form />} />
          <Route path="/population-chart" element={<PopulationChart />} />
          <Route path="/login" element={<LoginPage />} /> {/* Login route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
         
        </Routes>

        {/* Integrate Chatbot component */}
        <Chatbot /> 
      </div>
    </Router>
  );
}

export default App;