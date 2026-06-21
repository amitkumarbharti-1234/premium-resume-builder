import React, { useEffect } from 'react';
import { ResumeProvider, useResume } from './context/ResumeContext';
import DashboardLayout from './components/layout/DashboardLayout';

const AppContent = () => {
  const { data } = useResume();

  useEffect(() => {
    // Apply theme class to body
    document.body.className = data.settings.theme;
  }, [data.settings.theme]);

  return <DashboardLayout />;
};

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}

export default App;
