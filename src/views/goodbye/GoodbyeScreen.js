// src/components/GoodbyeScreen.js
import React from 'react';
import './GoodbyeScreen.css';
import yogaImage from '../../images/yoga-thank-you.png'; // Replace with a yoga-themed image
import { useNavigate } from 'react-router-dom';

function GoodbyeScreen() {
  const navigate = useNavigate();

  const handleStartOver = () => {
    navigate('/'); // Navigate back to the welcome screen or home page
  };

  return (
    <div className="goodbye-screen">
      <div className="top-section">
        <div className="icon-container">
          <img src={yogaImage} alt="Thank You" />
        </div>
        <h1>Thank You for Registering!</h1>
        <button className="language-btn">English</button>
      </div>

      <div className="bottom-section">
        <div className="completion-message">
          <h2>You have completed all the steps!</h2>
          <ul>
            <li>
              <span className="bullet completed"></span> Created your account
            </li>
            <li>
              <span className="bullet completed"></span> Selected your training program
            </li>
            <li>
              <span className="bullet completed"></span> Provided prior training details
            </li>
            <li>
              <span className="bullet completed"></span> Uploaded certifications
            </li>
            <li>
              <span className="bullet completed"></span> Completed payment
            </li>
          </ul>
          <h2>We look forward to seeing you soon!</h2>
          <button className="start-over-btn" onClick={handleStartOver}>
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoodbyeScreen;
