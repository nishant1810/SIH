import React from 'react';
import './CentralMinistriesPage.css';
import { Link } from 'react-router-dom';

const ministries = [
  { name: 'Comptroller And Auditor General Of India', schemes: 2 },
  { name: 'Ministry Of Agriculture And Farmers Welfare', schemes: 48 },
  { name: 'Ministry Of Chemicals And Fertilizers', schemes: 3 },
  { name: 'Ministry Of Commerce And Industry', schemes: 27 },
  { name: 'Ministry Of Communication', schemes: 5 },
  { name: 'Ministry Of Consumer Affairs, Food And Public Distribution', schemes: 1 },
  { name: 'Ministry Of Corporate Affairs', schemes: 1 },
  { name: 'Ministry Of Culture', schemes: 13 },
  { name: 'Ministry Of Defence', schemes: 11 },
  { name: 'Ministry Of Development Of North Eastern Region', schemes: 1 },
  { name: 'Ministry Of Earth Sciences', schemes: 1 },
  { name: 'Ministry Of Education', schemes: 72 },
  { name: 'Ministry Of Electronics and Information Technology', schemes: 6 },
  { name: 'Ministry Of Environment, Forests And Climate Change', schemes: 2 },
  { name: 'Ministry Of External Affairs', schemes: 4 },
  { name: 'Ministry Of Finance', schemes: 17 },
  { name: 'Ministry Of Fisheries, Animal Husbandry and Dairying', schemes: 3 },
  { name: 'Ministry Of Food Processing Industries', schemes: 1 },
  { name: 'Ministry Of Health & Family Welfare', schemes: 14 },
  { name: 'Ministry Of Heavy Industries', schemes: 2 },
  { name: 'Ministry Of Home Affairs', schemes: 10 },
  { name: 'Ministry Of Housing & Urban Affairs', schemes: 5 },
  { name: 'Ministry Of Information And Broadcasting', schemes: 5 },
  { name: 'Ministry Of Jal Shakti', schemes: 5 },
  { name: 'Ministry Of Labour And Employment', schemes: 6 },
  { name: 'Ministry Of Law And Justice', schemes: 2 },
  { name: 'Ministry Of Micro, Small And Medium Enterprises', schemes: 28 },
  { name: 'Ministry Of Minority Affairs', schemes: 5 },
  { name: 'Ministry Of New And Renewable Energy', schemes: 7 },
  { name: 'Ministry Of Panchayati Raj', schemes: 3 },
  { name: 'Ministry Of Personal, Public Grievances And Pensions', schemes: 3 },
  { name: 'Ministry Of Petroleum And Natural Gas', schemes: 3 },
  { name: 'Ministry Of Ports, Shipping and Waterways', schemes: 1 },
  { name: 'Ministry Of Railways', schemes: 1 },
  { name: 'Ministry Of Road Transport & Highways', schemes: 2 },
  { name: 'Ministry Of Rural Development', schemes: 10 },
  { name: 'Ministry Of Science And Technology', schemes: 59 },
  { name: 'Ministry Of Skill Development And Entrepreneurship', schemes: 1 },
  { name: 'Ministry Of Social Justice And Empowerment', schemes: 84 },
  { name: 'Ministry Of Statistics And Programme Implementation', schemes: 1 },
  { name: 'Ministry Of Textiles', schemes: 14 },
  { name: 'Ministry Of Tourism', schemes: 6 },
  { name: 'Ministry Of Tribal Affairs', schemes: 7 },
  { name: 'Ministry Of Women And Child Development', schemes: 8 },
  { name: 'Ministry Of Youth Affairs & Sports', schemes: 5 },
  { name: 'NITI Aayog', schemes: 1 },
  { name: 'The Lokpal of India', schemes: 1 },
];

const CentralMinistriesPage = () => {
  return (
    <div className="centralMinistriesPage">
      <h1>Central Ministries</h1>
      <div className="gridContainer">
        {ministries.map((ministry, index) => (
          <Link 
            key={index} 
            to={{
              pathname: '/filter-panel',
              state: { selectedMinistry: ministry.name }, // Pass selected ministry data via Link state
            }} 
            className="ministryCard"
          >
            <h2>{ministry.name}</h2>
            <p>{`${ministry.schemes} Schemes`}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CentralMinistriesPage;