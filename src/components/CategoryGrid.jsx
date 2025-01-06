import React from 'react';
import { useTranslation } from 'react-i18next';
import './CategoryGrid.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const categories = [
  { name: 'agriculture_rural_environment', schemes: 338, icon: '🌾' },
  { name: 'banking_financial_insurance', schemes: 172, icon: '🏦' },
  { name: 'business_entrepreneurship', schemes: 343, icon: '💼' },
  { name: 'education_learning', schemes: 626, icon: '🎓' },
  { name: 'health_wellness', schemes: 171, icon: '❤️' },
  { name: 'housing_shelter', schemes: 64, icon: '🏠' },
  { name: 'public_safety_law_justice', schemes: 9, icon: '⚖️' },
  { name: 'science_it_communications', schemes: 57, icon: '🔬' },
  { name: 'skills_employment', schemes: 217, icon: '📊' },
  { name: 'social_welfare_empowerment', schemes: 1092, icon: '✊' },
  { name: 'sports_culture', schemes: 106, icon: '🎾' },
  { name: 'transport_infrastructure', schemes: 46, icon: '🚍' },
  { name: 'travel_tourism', schemes: 34, icon: '🌍' },
  { name: 'utility_sanitation', schemes: 30, icon: '🔧' },
  { name: 'women_child', schemes: 323, icon: '👶' },
];

const CategoryGrid = () => {
  const { t } = useTranslation();
  const visibleCategories = categories.slice(0, 15); // Limit to 15 items for grid

  return (
    <div className="centralMinistriesPage">
      <h1>{t('find_schemes_by_category')}</h1>
      <div className="gridContainer">
        {visibleCategories.map((category, index) => (
          <Link 
            key={index} 
            to={{
              pathname: '/filter-panel',
              state: { selectedCategory: category.name }, // Pass selected category data via Link state
            }} 
            className="ministryCard"
          >
            <div className="category-icon">{category.icon}</div>
            <h4>{t(category.name)}</h4>
            <p>
              {category.schemes} {t('schemes_label')}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;