import React, { useState } from "react";
import './LoginPage.css';

const LoginPage = () => {
  const [role, setRole] = useState("user"); // Default role is "user"
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Update role based on selection
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(`Logging in as: ${role}`);
    console.log(`User Data:`, formData);
    
    // Example validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    
    // Proceed with login logic
    setErrorMessage(""); // Clear error if no issues
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Login</h2>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={handleRoleChange}
            />
            Admin
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="rememberMe"
              id="remember-me"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <button type="submit" className="sign-up-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
