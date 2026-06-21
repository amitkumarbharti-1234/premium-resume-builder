import React, { useState } from 'react';
import styles from './PreviewPanel.module.css';
import { useResume } from '../../context/ResumeContext';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import TemplateControls from './TemplateControls';

const templateMap = {
  modern: ModernTemplate,
  professional: ProfessionalTemplate,
  minimal: MinimalTemplate,
  // We'll map others to Modern for now as fallbacks
  creative: ModernTemplate,
  executive: ProfessionalTemplate,
  classic: MinimalTemplate,
  darkPremium: ModernTemplate,
  atsFriendly: ProfessionalTemplate
};

const PreviewPanel = () => {
  const { data } = useResume();
  const { template, typography } = data.settings;
  const [zoom, setZoom] = useState(100);

  const SelectedTemplate = templateMap[template] || ModernTemplate;

  const a4Style = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    textTransform: typography.textTransform,
    transform: `scale(${zoom / 100})`,
    transformOrigin: 'top center',
  };

  return (
    <div className={styles.container}>
      <TemplateControls zoom={zoom} setZoom={setZoom} />
      
      <div className={styles.previewWrapper}>
        <div 
          id="resume-preview-container" 
          className={styles.a4Page} 
          style={a4Style}
        >
          <SelectedTemplate data={data} />
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
