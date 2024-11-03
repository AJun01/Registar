// src/components/TrainingProgramSelection.js
import React, { useState } from 'react';
import './TrainingProgramSelection.css';
import { useNavigate } from 'react-router-dom';
import beginner from "../../images/beginner.jpg";
import intermediate from "../../images/intermediate.jpg";
import advanced from "../../images/advanced.jpg";

function TrainingProgramSelection() {
  const navigate = useNavigate();

  const [selectedProgram, setSelectedProgram] = useState('');
  const [error, setError] = useState('');

  const handleProgramSelect = (e) => {
    setSelectedProgram(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProgram) {
      console.log('Selected Program:', selectedProgram);
      navigate('/programDates'); // Redirect to the next step
    } else {
      setError('Please select a training program.');
    }
  };

  return (
    <form className="program-selection-form" onSubmit={handleSubmit}>
      <h2>Select Your Training Program</h2>
      <div className="program-options">
        <label className="program-card">
          <input
            type="radio"
            name="program"
            value="Beginner"
            onChange={handleProgramSelect}
          />
          <div className="card-content">
            <img src={beginner} alt="Beginner Program" />
            <h3>Beginner</h3>
            <p>Perfect for newcomers. Learn the basics of yoga.</p>
          </div>
        </label>

        <label className="program-card">
          <input
            type="radio"
            name="program"
            value="Intermediate"
            onChange={handleProgramSelect}
          />
          <div className="card-content">
            <img src={intermediate} alt="Intermediate Program" />
            <h3>Intermediate</h3>
            <p>For those who have mastered the basics and want more challenge.</p>
          </div>
        </label>

        <label className="program-card">
          <input
            type="radio"
            name="program"
            value="Advanced"
            onChange={handleProgramSelect}
          />
          <div className="card-content">
            <img src={advanced} alt="Advanced/Expert Program" />
            <h3>Advanced/Expert</h3>
            <p>Advanced techniques for experienced practitioners.</p>
          </div>
        </label>
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit">Next</button>
    </form>
  );
}

export default TrainingProgramSelection;
