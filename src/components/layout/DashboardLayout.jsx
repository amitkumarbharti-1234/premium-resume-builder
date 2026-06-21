import React, { useState } from 'react';
import styles from './DashboardLayout.module.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import FormPanel from '../form/FormPanel';
import PreviewPanel from '../preview/PreviewPanel';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import clsx from 'clsx';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleExportPDF = async () => {
    const previewElement = document.getElementById('resume-preview-container');
    if (!previewElement) return;

    try {
      const canvas = await html2canvas(previewElement, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
  };

  return (
    <div className={styles.layout}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.main}>
        <Topbar 
          onExport={handleExportPDF} 
          onPreviewToggle={() => setIsPreviewMode(!isPreviewMode)}
          isPreviewMode={isPreviewMode}
        />
        <div className={styles.content}>
          <div className={clsx(styles.formContainer, isPreviewMode && styles.hiddenMobile)}>
            <FormPanel activeTab={activeTab} />
          </div>
          <div className={clsx(styles.previewContainer, !isPreviewMode && styles.hiddenMobile)}>
            <PreviewPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
