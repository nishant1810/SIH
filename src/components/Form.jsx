import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Form.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [isDifferentlyAbled, setIsDifferentlyAbled] = useState(null);
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [language, setLanguage] = useState('en'); // Default language
  const { t } = useTranslation(); // Using useTranslation hook

  const navigate = useNavigate();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleReset = () => {
    setGender('');
    setAge('');
    setState('');
    setArea('');
    setCategory('');
    setIsDifferentlyAbled(null);
    setEmploymentStatus('');
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submission: Gender: ${gender}, Age: ${age}, State: ${state}, Area: ${area}, Category: ${category}, Differently Abled: ${isDifferentlyAbled}, Employment Status: ${employmentStatus}`);
    navigate('/thank-you');
  };

  const handleEmploymentSubmit = (e) => {
    e.preventDefault();
    if (employmentStatus) {
      handleNext();
    } else {
      alert(t('buttons.employmentStatusRequired'));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1>{t('title')}</h1>
      <div className="progress-bar">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`progress-step ${step > i ? 'active' : ''}`}>
            <span className="check-mark">{step > i ? '✔' : i + 1}</span>
          </div>
        ))}
      </div>

      <form onSubmit={step === 5 ? handleSubmit : (e) => e.preventDefault()}>
        {step === 1 && (
          <div className="form-step">
            <h3>{t('steps.step1')}</h3>
            <div className="gender-selection">
              <button type="button" className={gender === 'Male' ? 'active' : ''} onClick={() => setGender('Male')}>
                {t('gender.male')}
              </button>
              <button type="button" className={gender === 'Female' ? 'active' : ''} onClick={() => setGender('Female')}>
                {t('gender.female')}
              </button>
              <button type="button" className={gender === 'Transgender' ? 'active' : ''} onClick={() => setGender('Transgender')}>
                {t('gender.transgender')}
              </button>
            </div>

            <div className="age-selection">
              <h3>{t('buttons.ageLabel')}</h3>
              <select value={age} onChange={(e) => setAge(e.target.value)} required>
                <option value="">--</option>
                {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <span>{t('buttons.years')}</span>
            </div>
            <div className="form-buttons first-button">
              <button type="button" className="next-button" onClick={handleNext}>{t('buttons.next')}</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h3>{t('steps.step2')}</h3>
            <div className="form-group">
            <label htmlFor="state">{t('labels.state')}</label>
      <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">{t('labels.select')}</option>
        <option value="Andhra Pradesh">{t('states.andhra_pradesh')}</option>
        <option value="Arunachal Pradesh">{t('states.arunachal_pradesh')}</option>
        <option value="Assam">{t('states.assam')}</option>
        <option value="Bihar">{t('states.bihar')}</option>
        <option value="Chhattisgarh">{t('states.chhattisgarh')}</option>
        <option value="Goa">{t('states.goa')}</option>
        <option value="Gujarat">{t('states.gujarat')}</option>
        <option value="Haryana">{t('states.haryana')}</option>
        <option value="Himachal Pradesh">{t('states.himachal_pradesh')}</option>
        <option value="Jharkhand">{t('states.jharkhand')}</option>
        <option value="Karnataka">{t('states.karnataka')}</option>
        <option value="Kerala">{t('states.kerala')}</option>
        <option value="Madhya Pradesh">{t('states.madhya_pradesh')}</option>
        <option value="Maharashtra">{t('states.maharashtra')}</option>
        <option value="Manipur">{t('states.manipur')}</option>
        <option value="Meghalaya">{t('states.meghalaya')}</option>
        <option value="Mizoram">{t('states.mizoram')}</option>
        <option value="Nagaland">{t('states.nagaland')}</option>
        <option value="Odisha">{t('states.odisha')}</option>
        <option value="Punjab">{t('states.punjab')}</option>
        <option value="Rajasthan">{t('states.rajasthan')}</option>
        <option value="Sikkim">{t('states.sikkim')}</option>
        <option value="Tamil Nadu">{t('states.tamil_nadu')}</option>
        <option value="Telangana">{t('states.telangana')}</option>
        <option value="Tripura">{t('states.tripura')}</option>
        <option value="Uttar Pradesh">{t('states.uttar_pradesh')}</option>
        <option value="Uttarakhand">{t('states.uttarakhand')}</option>
        <option value="West Bengal">{t('states.west_bengal')}</option>
      </select>
            </div>
            <div className="form-group">
  <label>{t('labels.areas')}</label>
  <div className="radio-group">
    <input
      type="radio"
      id="urban"
      name="area"
      value="Urban"
      checked={area === 'Urban'}
      onChange={(e) => setArea(e.target.value)}
    />
    <label htmlFor="urban">{t('areas.urban')}</label>
    <input
      type="radio"
      id="rural"
      name="area"
      value="Rural"
      checked={area === 'Rural'}
      onChange={(e) => setArea(e.target.value)}
    />
    <label htmlFor="rural">{t('areas.rural')}</label>
  </div>
</div>

            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>{t('buttons.back')}</button>
              <button type="button" className="next-button" onClick={handleNext}>{t('buttons.next')}</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>{t('steps.step3')}</h2>
            <div className="employment-status-selection">
              <button type="button" className={employmentStatus === 'Employed' ? 'active' : ''} onClick={() => setEmploymentStatus('Employed')}>
                {t('employmentStatus.employed')}
              </button>
              <button type="button" className={employmentStatus === 'Unemployed' ? 'active' : ''} onClick={() => setEmploymentStatus('Unemployed')}>
                {t('employmentStatus.unemployed')}
              </button>
              <button type="button" className={employmentStatus === 'Self-Employed' ? 'active' : ''} onClick={() => setEmploymentStatus('Self-Employed')}>
                {t('employmentStatus.selfEmployed')}
              </button>
            </div>
            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>{t('buttons.back')}</button>
              <button type="button" className="next-button" onClick={handleEmploymentSubmit}>{t('buttons.next')}</button>
            </div>
          </div>
        )}
{step === 4 && (
  <div className="form-step">
    <h3>{t('steps.step4')}</h3>
    <div className="category-options">
      <button
        className={category === 'General' ? 'active' : ''}
        onClick={() => setCategory('General')}
      >
        {t('categories.general')}
      </button>
      <button
        className={category === 'OBC' ? 'active' : ''}
        onClick={() => setCategory('OBC')}
      >
        {t('categories.obc')}
      </button>
      <button
        className={category === 'PVTG' ? 'active' : ''}
        onClick={() => setCategory('PVTG')}
      >
        {t('categories.pvtg')}
      </button>
      <button
        className={category === 'SC' ? 'active' : ''}
        onClick={() => setCategory('SC')}
      >
        {t('categories.sc')}
      </button>
      <button
        className={category === 'ST' ? 'active' : ''}
        onClick={() => setCategory('ST')}
      >
        {t('categories.st')}
      </button>
    </div>
    <div className="form-buttons">
      <button type="button" className="previous-button" onClick={handleBack}>
        {t('buttons.back')}
      </button>
      <button type="button" className="next-button" onClick={handleNext}>
        {t('buttons.next')}
      </button>
    </div>
  </div>
)}


        {step === 5 && (
          <div className="form-step">
            <h2>{t('steps.step5')}</h2>
            <div className="differently-abled-selection">
            <button 
  type="button" 
  className={isDifferentlyAbled === true ? 'active' : ''} 
  onClick={() => setIsDifferentlyAbled(true)}
>
  {t('differentlyAbled.yes')}
</button>
<button 
  type="button" 
  className={isDifferentlyAbled === false ? 'active' : ''} 
  onClick={() => setIsDifferentlyAbled(false)}
>
  {t('differentlyAbled.no')}
</button>

            </div>
            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>{t('buttons.back')}</button>
              <button type="submit" className="submit-button">{t('buttons.submit')}</button>
            </div>
          </div>
        )}
      </form>

      
    </div>
  );
};

export default MultiStepForm;
