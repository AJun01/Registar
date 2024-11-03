// src/components/IntakeForm.js
import React, { useState } from 'react';
import './IntakeForm.css';
import { useNavigate } from 'react-router-dom';

function IntakeForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim()) formErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) formErrors.lastName = 'Last name is required';
    if (!formData.mobileNumber.trim()) formErrors.mobileNumber = 'Mobile number is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      navigate('/trainingProgramSelection'); // Updated route to the next step
    } else {
      setErrors(formErrors);
    }
  };

  // Placeholder functions for third-party authentication
  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    alert('Google Sign-In clicked');
  };

  const handleAppleSignIn = () => {
    // Implement Apple Sign-In logic here
    alert('Apple Sign-In clicked');
  };

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <h2>Account Creation</h2>

      <input
        name="firstName"
        type="text"
        placeholder="First Name *"
        value={formData.firstName}
        onChange={handleChange}
        className={errors.firstName ? 'error-input' : ''}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <input
        name="lastName"
        type="text"
        placeholder="Last Name *"
        value={formData.lastName}
        onChange={handleChange}
        className={errors.lastName ? 'error-input' : ''}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <input
        name="mobileNumber"
        type="tel"
        placeholder="Mobile Phone Number *"
        value={formData.mobileNumber}
        onChange={handleChange}
        className={errors.mobileNumber ? 'error-input' : ''}
      />
      {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

      <div className="auth-buttons">
        <p>Or sign in with:</p>
        <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        <button type="button" className="apple-btn" onClick={handleAppleSignIn}>
          Sign in with Apple
        </button>
      </div>

      <button type="submit">Next</button>
    </form>
  );
}

export default IntakeForm;
