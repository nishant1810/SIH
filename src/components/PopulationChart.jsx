import React, { useState } from "react";
import "./IndianTabs.css";
import Kerala from "./Kerala"; // Import Kerala component
// Import other state components as needed

const statesAndUTs = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal", "Puducherry"
];

const PopulationChart = () => {
  const [activeState, setActiveState] = useState("Andhra Pradesh"); // Default to Kerala

  const handleChange = (e) => {
    setActiveState(e.target.value);
  };

  const renderContent = () => {
    switch (activeState) {
      case "Kerala":
        return <Kerala />;
      // Add additional cases for other states' components here
      case "Andhra Pradesh":
        return <Kerala />; // Replace with actual component
      case "Arunachal Pradesh":
        return <div>Data for Arunachal Pradesh</div>; // Replace with actual component
      case "Assam":
        return <div>Data for Assam</div>; // Replace with actual component
      case "Bihar":
        return <div>Data for Bihar</div>; // Replace with actual component
      case "Chhattisgarh":
        return <div>Data for Chhattisgarh</div>; // Replace with actual component
      case "Chandigarh":
        return <div>Data for Chandigarh</div>; // Replace with actual component
      case "Dadra and Nagar Haveli":
        return <div>Data for Dadra and Nagar Haveli</div>; // Replace with actual component
      case "Daman and Diu":
        return <div>Data for Daman and Diu</div>; // Replace with actual component
      case "Delhi":
        return <div>Data for Delhi</div>; // Replace with actual component
      case "Goa":
        return <div>Data for Goa</div>; // Replace with actual component
      case "Gujarat":
        return <div>Data for Gujarat</div>; // Replace with actual component
      case "Haryana":
        return <div>Data for Haryana</div>; // Replace with actual component
      case "Himachal Pradesh":
        return <div>Data for Himachal Pradesh</div>; // Replace with actual component
      case "Jharkhand":
        return <div>Data for Jharkhand</div>; // Replace with actual component
      case "Karnataka":
        return <div>Data for Karnataka</div>; // Replace with actual component
      case "Lakshadweep":
        return <div>Data for Lakshadweep</div>; // Replace with actual component
      case "Madhya Pradesh":
        return <div>Data for Madhya Pradesh</div>; // Replace with actual component
      case "Maharashtra":
        return <div>Data for Maharashtra</div>; // Replace with actual component
      case "Manipur":
        return <div>Data for Manipur</div>; // Replace with actual component
      case "Meghalaya":
        return <div>Data for Meghalaya</div>; // Replace with actual component
      case "Mizoram":
        return <div>Data for Mizoram</div>; // Replace with actual component
      case "Nagaland":
        return <div>Data for Nagaland</div>; // Replace with actual component
      case "Odisha":
        return <div>Data for Odisha</div>; // Replace with actual component
      case "Punjab":
        return <div>Data for Punjab</div>; // Replace with actual component
      case "Rajasthan":
        return <div>Data for Rajasthan</div>; // Replace with actual component
      case "Sikkim":
        return <div>Data for Sikkim</div>; // Replace with actual component
      case "Tamil Nadu":
        return <div>Data for Tamil Nadu</div>; // Replace with actual component
      case "Telangana":
        return <div>Data for Telangana</div>; // Replace with actual component
      case "Tripura":
        return <div>Data for Tripura</div>; // Replace with actual component
      case "Uttar Pradesh":
        return <div>Data for Uttar Pradesh</div>; // Replace with actual component
      case "Uttarakhand":
        return <div>Data for Uttarakhand</div>; // Replace with actual component
      case "West Bengal":
        return <div>Data for West Bengal</div>; // Replace with actual component
      case "Puducherry":
        return <div>Data for Puducherry</div>; // Replace with actual component
      default:
        return <p>No data available for {activeState}</p>;
    }
  };

  return (
    <div >
     
      <div className="box">
      <h1>State:</h1>
      <label htmlFor="state-select"></label>
      <select id="state-select" value={activeState} onChange={handleChange}>
        {statesAndUTs.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      </div>
      <div className="content">
       
        {renderContent()}
      </div>
    </div>
  );
};

export default PopulationChart;
