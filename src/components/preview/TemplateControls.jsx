import React from 'react';
import styles from './TemplateControls.module.css';
import { useResume } from '../../context/ResumeContext';
import { ZoomIn, ZoomOut } from 'lucide-react';
import clsx from 'clsx';

const templates = [
  { id: 'modern', label: 'Modern' },
  { id: 'professional', label: 'Professional' },
  { id: 'creative', label: 'Creative' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'executive', label: 'Executive' },
  { id: 'classic', label: 'Classic' },
  { id: 'darkPremium', label: 'Dark Premium' },
  { id: 'atsFriendly', label: 'ATS Friendly' }
];

const fonts = ['Inter', 'Poppins', 'Lora', 'Playfair Display', 'Bebas Neue'];

const TemplateControls = ({ zoom, setZoom }) => {
  const { data, updateSettings, updateTypography } = useResume();
  const { template, typography, writingStyle } = data.settings;

  return (
    <div className={clsx('glass-panel', styles.controls)}>
      <div className={styles.section}>
        <label className={styles.label}>Template</label>
        <select 
          className="form-input" 
          value={template} 
          onChange={(e) => updateSettings('template', e.target.value)}
        >
          {templates.map(t => (
            <option key={t.id} value={t.id}>{t.label}</option>
          ))}
        </select>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Font</label>
        <select 
          className="form-input" 
          value={typography.fontFamily} 
          onChange={(e) => updateTypography('fontFamily', e.target.value)}
        >
          {fonts.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Font Size</label>
        <select 
          className="form-input" 
          value={typography.fontSize} 
          onChange={(e) => updateTypography('fontSize', e.target.value)}
        >
          <option value="12px">Small</option>
          <option value="14px">Medium</option>
          <option value="16px">Large</option>
        </select>
      </div>

      <div className={styles.zoomControls}>
        <button className={styles.zoomBtn} onClick={() => setZoom(z => Math.max(50, z - 10))}>
          <ZoomOut size={16} />
        </button>
        <span className={styles.zoomLevel}>{zoom}%</span>
        <button className={styles.zoomBtn} onClick={() => setZoom(z => Math.min(150, z + 10))}>
          <ZoomIn size={16} />
        </button>
      </div>
    </div>
  );
};

export default TemplateControls;
