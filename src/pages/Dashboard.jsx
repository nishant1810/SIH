import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="stats">
        <div className="stat-card">
          <h2>Total Schemes</h2>
          <p className="stat-number">2646</p>
        </div>
        <div className="stat-card">
          <h2>Central Schemes</h2>
          <p className="stat-number">522</p>
        </div>
        <div className="stat-card">
          <h2>States/UTs Schemes</h2>
          <p className="stat-number">2124</p>
        </div>
      </div>

      <h3>Most Viewed Schemes</h3>
      <ul className="most-viewed-schemes">
        <li>1. Mukhyamantri - Majhi Ladki Bahin Yojana <span>Maharashtra</span></li>
        <li>2. Pradhan Mantri Awaas Yojana - Gramin <span>Ministry Of Rural Development</span></li>
        <li>3. PM – Surya Ghar: Muft Bijli Yojana <span>Ministry Of New and Renewable Energy</span></li>
        <li>4. Udyogini Scheme <span>Karnataka</span></li>
        <li>5. Pradhan Mantri Jeevan Jyoti Bima Yojana <span>Ministry Of Finance</span></li>
        <li>6. Kisan Credit Card <span>Ministry Of Agriculture and Farmers Welfare</span></li>
        <li>7. Jharkhand Mukhyamantri Maiya Samman Yojana <span>Jharkhand</span></li>
        <li>8. NSAP - Indira Gandhi National Old Age Pension Scheme <span>Ministry Of Rural Development</span></li>
        <li>9. Chief Minister Nari Shakti Yojana <span>Bihar</span></li>
      </ul>

     
    </div>
  );
};

export default Dashboard;
 