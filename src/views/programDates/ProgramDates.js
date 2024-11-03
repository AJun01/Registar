// src/components/ProgramDates.js
import React, { useState } from 'react';
import './ProgramDates.css';
import { useNavigate } from 'react-router-dom';

function ProgramDates() {
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];

  const [datesData, setDatesData] = useState({
    startDate: '',
    endDate: '',
  });

  const [errors, setErrors] = useState({}); // For validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatesData({ ...datesData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    const start = new Date(datesData.startDate);
    const end = new Date(datesData.endDate);

    // Check if both fields are filled
    if (!datesData.startDate) {
      formErrors.startDate = 'Start Date is required';
    } else if (start < today) {
      formErrors.startDate = 'Start Date cannot be in the past';
    }

    if (!datesData.endDate) {
      formErrors.endDate = 'End Date is required';
    } else if (end < today) {
      formErrors.endDate = 'End Date cannot be in the past';
    }

    // Check if start date is before end date
    if (datesData.startDate && datesData.endDate) {
      if (start >= end) {
        formErrors.dateOrder = 'Start Date must be before End Date';
      }
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Proceed with form submission if no errors
      console.log(datesData);
      navigate('/UploadCertificate'); // Redirect to the next step
    } else {
      setErrors(formErrors); // Display errors if any
    }
  };

  return (
    <form className="program-dates-form" onSubmit={handleSubmit}>
      <h2>Program Start/End Dates</h2>

      <div className="form-group">
        <label>Start Date (MM/DD/YYYY) *</label>
        <input
          name="startDate"
          type="date"
          min={today}
          value={datesData.startDate}
          onChange={handleChange}
          className={errors.startDate ? 'error-input' : ''}
        />
        {errors.startDate && <p className="error">{errors.startDate}</p>}
      </div>

      <div className="form-group">
        <label>End Date (MM/DD/YYYY) *</label>
        <input
          name="endDate"
          type="date"
          min={datesData.startDate || today} // Ensures end date can't be before start date
          value={datesData.endDate}
          onChange={handleChange}
          className={errors.endDate ? 'error-input' : ''}
        />
        {errors.endDate && <p className="error">{errors.endDate}</p>}
      </div>

      {errors.dateOrder && <p className="error">{errors.dateOrder}</p>}

      <button type="submit">Next</button>
    </form>
  );
}
export default ProgramDates;
