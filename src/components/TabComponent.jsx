// TabComponent.jsx
import React, { useState } from 'react';
import './TabComponent.css'; // Import the CSS file for styles
import CategoryGrid from './CategoryGrid'; // Import the CategoryGrid component
import CentralMinistriesPage from './CentralMinistriesPage';
import StatesUTsPage from './StatesUTsPage';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('states');

  const tabs = [
    { id: 'states', label: 'States/UTs' },
    { id: 'ministries', label: 'Central Ministries' },
    { id: 'categories', label: 'Categories' }, // New Categories tab
  ];

  return (
    <div>
      <div className="tabContainer">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabContent">
        {activeTab === 'states' && <StatesUTsPage/>}
        {activeTab === 'ministries' && <CentralMinistriesPage/>}
        {activeTab === 'categories' && <CategoryGrid />} {/* Show CategoryGrid when Categories tab is active */}
      </div>
    </div>
  );
};

export default TabComponent;
