import React from 'react';
import './StatesUTsPage.css'; // Ensure to create this CSS file for styles
import { Link } from 'react-router-dom';

const statesAndUTs = [
  { name: 'Andaman and Nicobar', countUT: 18, countCentral: 468, type: 'UT' },
  { name: 'Andhra Pradesh', countState: 54, countCentral: 469, type: 'State' },
  { name: 'Arunachal Pradesh', countState: 35, countCentral: 472, type: 'State' },
  { name: 'Assam', countState: 49, countCentral: 472, type: 'State' },
  { name: 'Bihar', countState: 54, countCentral: 468, type: 'State' },
  { name: 'Chandigarh', countUT: 20, countCentral: 468, type: 'UT' },
  { name: 'Chhattisgarh', countState: 80, countCentral: 469, type: 'State' },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', countUT: 12, countCentral: 470, type: 'UT' },
  { name: 'Delhi', countUT: 35, countCentral: 469, type: 'UT' },
  { name: 'Goa', countState: 117, countCentral: 469, type: 'State' },
  { name: 'Gujarat', countState: 118, countCentral: 470, type: 'State' },
  { name: 'Haryana', countState: 157, countCentral: 468, type: 'State' },
  { name: 'Himachal Pradesh', countState: 55, countCentral: 468, type: 'State' },
  { name: 'Jammu and Kashmir', countUT: 15, countCentral: 470, type: 'UT' },
  { name: 'Jharkhand', countState: 54, countCentral: 470, type: 'State' },
  { name: 'Karnataka', countState: 120, countCentral: 471, type: 'State' },
  { name: 'Kerala', countState: 82, countCentral: 472, type: 'State' },
  { name: 'Ladakh', countUT: 8, countCentral: 470, type: 'UT' },
  { name: 'Lakshadweep', countUT: 6, countCentral: 470, type: 'UT' },
  { name: 'Madhya Pradesh', countState: 98, countCentral: 471, type: 'State' },
  { name: 'Maharashtra', countState: 168, countCentral: 472, type: 'State' },
  { name: 'Manipur', countState: 32, countCentral: 470, type: 'State' },
  { name: 'Meghalaya', countState: 25, countCentral: 470, type: 'State' },
  { name: 'Mizoram', countState: 15, countCentral: 469, type: 'State' },
  { name: 'Nagaland', countState: 18, countCentral: 470, type: 'State' },
  { name: 'Odisha', countState: 94, countCentral: 471, type: 'State' },
  { name: 'Puducherry', countUT: 22, countCentral: 470, type: 'UT' },
  { name: 'Punjab', countState: 110, countCentral: 470, type: 'State' },
  { name: 'Rajasthan', countState: 98, countCentral: 471, type: 'State' },
  { name: 'Sikkim', countState: 11, countCentral: 470, type: 'State' },
  { name: 'Tamil Nadu', countState: 132, countCentral: 472, type: 'State' },
  { name: 'Telangana', countState: 62, countCentral: 471, type: 'State' },
  { name: 'Tripura', countState: 24, countCentral: 469, type: 'State' },
  { name: 'Uttar Pradesh', countState: 220, countCentral: 472, type: 'State' },
  { name: 'Uttarakhand', countState: 45, countCentral: 471, type: 'State' },
  { name: 'West Bengal', countState: 165, countCentral: 472, type: 'State' },
];

const StatesUTsPage = () => {
  return (
    <div className="statesUTsPage">
      <h1>States and Union Territories</h1>
      <div className="gridContainer">
        {statesAndUTs.map((state, index) => (
          <Link 
            key={index} 
            to={{
              pathname: '/filter-panel',
              state: { selectedState: state.name }, // Pass selected state data via Link state
            }} 
            className="stateCard"
          >
            <h2>{state.name}</h2>
            <p>{state.type === 'State' ? `${state.countState} State` : `${state.countUT} UT`}</p>
            <p>{`${state.countCentral} Central`}</p>
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default StatesUTsPage;