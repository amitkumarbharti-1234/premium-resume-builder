import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

const defaultPersonal = {
  fullName: 'John Doe',
  jobTitle: 'Senior Software Engineer',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  summary: 'Passionate and results-driven software engineer with 5+ years of experience in building scalable web applications. Adept at collaborating with cross-functional teams to drive innovation and deliver high-quality software solutions.'
};

const defaultSettings = {
  theme: 'dark',
  template: 'modern',
  writingStyle: 'professional',
  typography: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0px',
    textTransform: 'none',
  }
};

const initialData = {
  personal: defaultPersonal,
  education: [
    { id: '1', school: 'University of California', degree: 'B.S. Computer Science', startDate: 'Sep 2015', endDate: 'May 2019', description: 'Graduated with Honors. President of the CS Club.' }
  ],
  experience: [
    { id: '1', company: 'Tech Innovators Inc.', position: 'Software Engineer', startDate: 'Jun 2019', endDate: 'Present', description: 'Developed and maintained core features of the flagship SaaS product.\nImproved application performance by 30% through code optimization and lazy loading.' }
  ],
  skills: [
    { id: '1', name: 'JavaScript / TypeScript', level: 'Expert' },
    { id: '2', name: 'React.js', level: 'Expert' },
    { id: '3', name: 'Node.js', level: 'Advanced' },
  ],
  projects: [
    { id: '1', title: 'E-commerce Platform', link: 'github.com/johndoe/ecommerce', description: 'Built a full-stack e-commerce platform using MERN stack, featuring user authentication, payment processing, and inventory management.' }
  ],
  certifications: [],
  languages: [
    { id: '1', name: 'English', proficiency: 'Native' }
  ],
  links: [
    { id: '1', label: 'LinkedIn', url: 'linkedin.com/in/johndoe' },
    { id: '2', label: 'GitHub', url: 'github.com/johndoe' }
  ],
  settings: defaultSettings,
};

export const ResumeProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('resumeData');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(data));
  }, [data]);

  const updatePersonal = (field, value) => {
    setData(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const updateArrayItem = (section, id, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const addArrayItem = (section, newItem) => {
    setData(prev => ({ ...prev, [section]: [...prev[section], { id: uuidv4(), ...newItem }] }));
  };

  const removeArrayItem = (section, id) => {
    setData(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
  };

  const updateSettings = (field, value) => {
    setData(prev => ({ ...prev, settings: { ...prev.settings, [field]: value } }));
  };

  const updateTypography = (field, value) => {
    setData(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        typography: { ...prev.settings.typography, [field]: value }
      }
    }));
  };

  const resetData = () => setData(initialData);

  return (
    <ResumeContext.Provider value={{
      data,
      updatePersonal,
      updateArrayItem,
      addArrayItem,
      removeArrayItem,
      updateSettings,
      updateTypography,
      resetData
    }}>
      {children}
    </ResumeContext.Provider>
  );
};
