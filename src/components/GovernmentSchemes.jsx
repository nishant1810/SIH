import React from 'react';
import './GovernmentSchemes.css';

const GovernmentSchemes = () => {
  const schemes = [
    {
      id: 1,
      name: "Pradhan Mantri Jan Dhan Yojana",
      description: "A financial inclusion program of the Government of India.",
      eligibility: "All Indian citizens",
      benefits: "Bank account opening with zero balance",
      link: "https://pmjdy.gov.in",
    },
    {
      id: 2,
      name: "Ayushman Bharat Yojana",
      description: "Health insurance scheme for poor and vulnerable families.",
      eligibility: "Families below the poverty line",
      benefits: "Health coverage up to ₹5 lakh per family",
      link: "https://pmjay.gov.in",
    },
    {
      id: 3,
      name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
      description: "Provides at least 100 days of guaranteed wage employment in a financial year to every rural household.",
      eligibility: "All rural households",
      benefits: "Guaranteed employment and wage security",
      link: "https://nrega.nic.in",
    },
    {
      id: 4,
      name: "Pradhan Mantri Awas Yojana",
      description: "A housing initiative aimed at providing affordable housing to the urban poor.",
      eligibility: "Low-income groups and economically weaker sections",
      benefits: "Subsidized interest rates on home loans",
      link: "https://pmaymis.gov.in",
    },
    {
      id: 5,
      name: "Swachh Bharat Mission",
      description: "A campaign launched to clean the streets, roads, and infrastructure of the cities and rural areas.",
      eligibility: "All citizens",
      benefits: "Financial assistance for construction of toilets and cleanliness drives",
      link: "https://swachhsurvekshan2024.org",
    },
    {
      id: 6,
      name: "Skill India Mission",
      description: "A campaign to encourage youth to take up skill development programs.",
      eligibility: "Youth and unemployed individuals",
      benefits: "Training and skill development opportunities",
      link: "https://www.skillindia.gov.in",
    },
    {
      id: 7,
      name: "Atal Pension Yojana",
      description: "A government-backed pension scheme for workers in the unorganized sector.",
      eligibility: "Citizens aged 18-40 years",
      benefits: "Guaranteed pension after retirement",
      link: "https://www.npscra.nsdl.co.in",
    },
    {
      id: 8,
      name: "Digital India Initiative",
      description: "A campaign to ensure that government services are made available to citizens electronically.",
      eligibility: "All citizens",
      benefits: "Access to government services online",
      link: "https://www.digitalindia.gov.in",
    },
    {
      id: 9,
      name: "Beti Bachao Beti Padhao",
      description: "A campaign to save the girl child and educate her.",
      eligibility: "All families",
      benefits: "Financial assistance for education of the girl child",
      link: "https://www.bbbp.gov.in",
    },
    {
      id: 10,
      name: "Ujjwala Yojana",
      description: "A scheme to provide free LPG connections to women from Below Poverty Line (BPL) households.",
      eligibility: "Women from BPL households",
      benefits: "Free LPG connections",
      link: "https://www.pmujjwalayojana.com",
    },
  ];

  return (
    <div className="schemes-container">
      <h1>Government Schemes</h1>
      <div className="schemes-list">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <h2>{scheme.name}</h2>
            <p><strong>Description:</strong> {scheme.description}</p>
            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
            <p><strong>Benefits:</strong> {scheme.benefits}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="scheme-link">
              More Info
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentSchemes;
