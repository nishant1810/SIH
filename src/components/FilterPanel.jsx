import React, { useState, useEffect } from 'react';
import './FilterPanel.css';


const FilterPanel = () => {
   
    const initialFilters = {
        state: '',
        gender: '',
        age: '',
        caste: '',
        ministry: '',
        residence: '',
        minority: '',
        differentlyAbled: '',
        benefitType: '',
        dbtScheme: '',
        disabilityPercentage: '',
        belowPovertyLine: '',
        governmentEmployee: '',
        employmentStatus: '',
        student: '',
        occupation: '',
        applicationMode: '',
        schemeType: '',
        allGender: false,
        female: false,
        male: false,
        allCaste: false,
        sc: false,
        st: false,
        obc: false,
        general: false,
        both: false,
        rural: false,
        minorityNo: false,
        minorityYes: false,
        differentlyAbledNo: false,
        differentlyAbledYes: false,
        cash: false,
        inKind: false,
        composite: false,
        dbtSchemeNo: false,
        dbtSchemeYes: false,
        bplNo: false,
        bplYes: false,
        govEmployeeNo: false,
        govEmployeeYes: false,
        employed: false,
        unemployed: false,
        studentNo: false,
        studentYes: false,
    };

    const [filters, setFilters] = useState(initialFilters);

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSelectChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.checked });
    };

    const resetFilters = () => {
        setFilters(initialFilters);
    };

    return (
        <div className="filter-panel">
            <h3>Filter By</h3>
            <button className="reset-filters" onClick={resetFilters}>Reset Filters</button>

            {/* State Filter */}
            <div className="filter-group">
                <label>State</label>
                <select name="state" value={filters.state} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    {["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"].map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {/* Gender Filter */}
            <div className="filter-group">
                <label>Gender</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="allGender" checked={filters.allGender} onChange={handleCheckboxChange} /> All </label>
                    <label><input type="checkbox" name="female" checked={filters.female} onChange={handleCheckboxChange} /> Female </label>
                    <label><input type="checkbox" name="male" checked={filters.male} onChange={handleCheckboxChange} /> Male </label>
                </div>
            </div>

            {/* Age Filter */}
            <div className="filter-group">
                <label>Age</label>
                <select name="age" value={filters.age} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="age1">18-25</option>
                    <option value="age2">26-35</option>
                    <option value="age3">36-50</option>
                    <option value="age4">51+</option>
                </select>
            </div>

            {/* Caste Filter */}
            <div className="filter-group">
                <label>Caste</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="allCaste" checked={filters.allCaste} onChange={handleCheckboxChange} /> All </label>
                    <label><input type="checkbox" name="sc" checked={filters.sc} onChange={handleCheckboxChange} /> Scheduled Caste (SC)</label>
                    <label><input type="checkbox" name="st" checked={filters.st} onChange={handleCheckboxChange} /> Scheduled Tribe (ST) </label>
                    <label><input type="checkbox" name="obc" checked={filters.obc} onChange={handleCheckboxChange} /> Other Backward Class (OBC) </label>
                    <label><input type="checkbox" name="general" checked={filters.general} onChange={handleCheckboxChange} /> General </label>
                </div>
            </div>

            {/* Ministry Filter */}
            <div className="filter-group">
                <label>Ministry Name</label>
                <select name="ministry" value={filters.ministry} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    {["Comptroller And Auditor General Of India", "Ministry Of Agriculture And Farmers Welfare", "Ministry Of Chemicals And Fertilizers", "Ministry Of Commerce And Industry", "Ministry Of Communication", "Ministry Of Consumer Affairs, Food And Public Distribution", "Ministry Of Corporate Affairs", "Ministry Of Culture", "Ministry Of Defence", "Ministry Of Development Of North Eastern Region", "Ministry Of Earth Sciences", "Ministry Of Education", "Ministry Of Electronics and Information Technology", "Ministry Of Environment, Forests And Climate Change", "Ministry Of External Affairs", "Ministry Of Finance", "Ministry Of Fisheries, Animal Husbandry and Dairying", "Ministry Of Food Processing Industries", "Ministry Of Health & Family Welfare", "Ministry Of Heavy Industries", "Ministry Of Home Affairs", "Ministry Of Housing & Urban Affairs", "Ministry Of Information And Broadcasting", "Ministry Of Jal Shakti", "Ministry Of Labour And Employment", "Ministry Of Law And Justice", "Ministry Of Micro, Small And Medium Enterprises", "Ministry Of Minority Affairs", "Ministry Of New And Renewable Energy", "Ministry Of Panchayati Raj", "Ministry Of Personal, Public Grievances And Pensions", "Ministry Of Petroleum And Natural Gas", "Ministry Of Ports, Shipping and Waterways", "Ministry Of Railways", "Ministry Of Road Transport & Highways", "Ministry Of Rural Development", "Ministry Of Science And Technology", "Ministry Of Skill Development And Entrepreneurship", "Ministry Of Social Justice And Empowerment", "Ministry Of Statistics And Programme Implementation", "Ministry Of Textiles", "Ministry Of Tourism", "Ministry Of Tribal Affairs", "Ministry Of Women And Child Development", "Ministry Of Youth Affairs & Sports", "NITI Aayog", "The Lokpal of India"].map((ministry) => (
                        <option key={ministry} value={ministry}>{ministry}</option>
                    ))}
                </select>
            </div>

            {/* Residence Filter */}
            <div className="filter-group">
                <label>Residence</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="both" checked={filters.both} onChange={handleCheckboxChange} /> Both </label>
                    <label><input type="checkbox" name="rural" checked={filters.rural} onChange={handleCheckboxChange} /> Rural </label>
                </div>
            </div>

            {/* Minority Filter */}
            <div className="filter-group">
                <label>Minority</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="minorityNo" checked={filters.minorityNo} onChange={handleCheckboxChange} /> No </label>
                    <label><input type="checkbox" name="minorityYes" checked={filters.minorityYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Differently Abled Filter */}
            <div className="filter-group">
                <label>Differently Abled</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="differentlyAbledNo" checked={filters.differentlyAbledNo} onChange={handleCheckboxChange} /> No </label>
                    <label><input type="checkbox" name="differentlyAbledYes" checked={filters.differentlyAbledYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Benefit Type Filter */}
            <div className="filter-group">
                <label>Benefit Type</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="cash" checked={filters.cash} onChange={handleCheckboxChange} /> Cash </label>
                    <label><input type="checkbox" name="inKind" checked={filters.inKind} onChange={handleCheckboxChange} /> In-Kind </label>
                    <label><input type="checkbox" name="composite" checked={filters.composite} onChange={handleCheckboxChange} /> Composite </label>
                </div>
            </div>

            {/* DBT Scheme Filter */}
            <div className="filter-group">
                <label>DBT Scheme</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="dbtSchemeNo" checked={filters.dbtSchemeNo} onChange={handleCheckboxChange} /> No </label>
                    <label><input type="checkbox" name="dbtSchemeYes" checked={filters.dbtSchemeYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Below Poverty Line Filter */}
            <div className="filter-group">
                <label>Below Poverty Line</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="bplNo" checked={filters.bplNo} onChange={handleCheckboxChange} /> No </label>
                    <label><input type="checkbox" name="bplYes" checked={filters.bplYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Government Employee Filter */}
            <div className="filter-group">
                <label>Government Employee</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="govEmployeeNo" checked={filters.govEmployeeNo} onChange={handleCheckboxChange} /> No </label>
                    <label><input type="checkbox" name="govEmployeeYes" checked={filters.govEmployeeYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Employment Status Filter */}
            <div className="filter-group">
                <label>Employment Status</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="employed" checked={filters.employed} onChange={handleCheckboxChange} /> Employed </label>
                    <label><input type="checkbox" name="unemployed" checked={filters.unemployed} onChange={handleCheckboxChange} /> Unemployed </label>
                </div>
            </div>

            {/* Student Filter */}
            <div className="filter-group">
                <label>Student</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="studentNo" checked={filters.studentNo} onChange={handleCheckboxChange} /> No </label>
                    <label><input type="checkbox" name="studentYes" checked={filters.studentYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Occupation Filter */}
            <div className="filter-group">
                <label>Occupation</label>
                <select name="occupation" value={filters.occupation} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    {["Agriculture", "Business", "Service", "Student"].map((occupation) => (
                        <option key={occupation} value={occupation}>{occupation}</option>
                    ))}
                </select>
            </div>

            {/* Application Mode Filter */}
            <div className="filter-group">
                <label>Application Mode</label>
                <select name="applicationMode" value={filters.applicationMode} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    {["Online", "Offline"].map((mode) => (
                        <option key={mode} value={mode}>{mode}</option>
                    ))}
                </select>
            </div>

            {/* Scheme Type Filter */}
            <div className="filter-group">
                <label>Scheme Type</label>
                <select name="schemeType" value={filters.schemeType} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    {["Financial", "Non-Financial"].map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterPanel;
