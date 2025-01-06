// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file
import './AboutUs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About SchemeHub */}
        {/* <div className="footer-section">
          <h4>About SchemeHub</h4>
          <p>
            SchemeHub is a comprehensive platform that facilitates the search and discovery of government schemes tailored to individual needs and eligibility.<br/>
            By streamlining access to various welfare programs, it empowers citizens to easily identify and apply for the benefits they qualify for,<br/>
            ensuring a more inclusive and efficient experience.
          </p>
        </div> */}

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/government-schemes" className="footer-link">Government Schemes</Link></li>

          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:contact@schemehub.gov.in">contact@schemehub.gov.in</a></p>
          <p>Phone: 1800-123-4567</p>
          <p>Address: Government Building, Sector-1, New Delhi, India</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="footer-social">
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <p className="footer-copyRight">
        &copy; 2024 SchemeHub. All rights reserved.<br />
        Disclaimer: The information provided on this platform is subject to verification.
      </p>
    </footer>
  );
};

export default Footer;
