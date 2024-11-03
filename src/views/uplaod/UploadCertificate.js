import React, { useState } from 'react';
import './UploadCertificate.css';
import { useNavigate } from 'react-router-dom';

function UploadCertificate() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setError(''); // Reset error when files are selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setError('Please upload your certificate(s).');
      return;
    }
    console.log('Uploaded files:', files);
    // Implement file upload logic here
    navigate('/payment'); // Redirect to the payment step
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Upload Your Certificate(s)</h2>

      <div className="form-group">
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          multiple
          onChange={handleFileChange}
        />
        {error && <p className="error">{error}</p>}
      </div>

      {files.length > 0 && (
        <div className="file-info">
          <p>Selected files:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <button type="submit">Next</button>
    </form>
  );
}

export default UploadCertificate;
