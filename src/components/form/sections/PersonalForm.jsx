import React from 'react';
import styles from '../FormPanel.module.css';
import { useResume } from '../../../context/ResumeContext';

const PersonalForm = () => {
  const { data, updatePersonal } = useResume();
  const { personal } = data;

  const handleChange = (e) => {
    updatePersonal(e.target.name, e.target.value);
  };

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Personal Details</h2>
        <p className={styles.subtitle}>Get started with the basic information</p>
      </div>

      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            className="form-input" 
            value={personal.fullName} 
            onChange={handleChange} 
            placeholder="e.g. John Doe"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Job Title</label>
          <input 
            type="text" 
            name="jobTitle" 
            className="form-input" 
            value={personal.jobTitle} 
            onChange={handleChange} 
            placeholder="e.g. Senior Software Engineer"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            name="email" 
            className="form-input" 
            value={personal.email} 
            onChange={handleChange} 
            placeholder="e.g. john@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input 
            type="text" 
            name="phone" 
            className="form-input" 
            value={personal.phone} 
            onChange={handleChange} 
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div className="form-group fullWidth">
          <label className="form-label">Location</label>
          <input 
            type="text" 
            name="location" 
            className="form-input" 
            value={personal.location} 
            onChange={handleChange} 
            placeholder="e.g. San Francisco, CA"
          />
        </div>
        <div className={`form-group ${styles.fullWidth}`}>
          <label className="form-label">Professional Summary</label>
          <textarea 
            name="summary" 
            className="form-input" 
            value={personal.summary} 
            onChange={handleChange} 
            rows={5}
            placeholder="Write a brief summary about your professional background..."
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
