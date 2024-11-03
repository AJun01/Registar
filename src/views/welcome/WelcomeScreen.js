import React from 'react';
import './WelcomeScreen.css';
import yogaIcon from '../../images/yoga-icon.png'; // Replace with a yoga-related image
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/intake'); // Assuming '/intake' is your registration form route
  };

  return (
    <div className="welcome-screen">
      <div className="top-section">
        <div className="icon-container">
          <img src={yogaIcon} alt='Yoga Icon' />
        </div>
        <h1>Welcome to Yoga Instructor Registration</h1>
        <button className="language-btn">English</button>
      </div>

      <div className="bottom-section">
        <div className="todo-list">
          <h1>Here's what we'll do today:</h1>
          <ul>
            <li>
              <span className="bullet orange"></span> Create your account
            </li>
            <li>
              <span className="bullet"></span> Select your training program
            </li>
            <li>
              <span className="bullet"></span> Provide prior training details
            </li>
            <li>
              <span className="bullet"></span> Upload certifications
            </li>
            <li>
              <span className="bullet"></span> Complete payment
            </li>
          </ul>
          <button className="register-btn" onClick={handleRegister}>Register Now</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
