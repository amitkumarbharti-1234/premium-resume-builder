import React from 'react';
import styles from './Topbar.module.css';
import { Eye, Download, Smartphone, RotateCcw, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { useResume } from '../../context/ResumeContext';

const Topbar = ({ onExport, onPreviewToggle, isPreviewMode }) => {
  const { data, updateSettings, resetData } = useResume();
  const { theme } = data.settings;

  const toggleTheme = () => {
    updateSettings('theme', theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={clsx('glass-panel', styles.topbar)}>
      <div className={styles.left}>
        <h2 className={styles.title}>Dashboard</h2>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionBtn} onClick={resetData} title="Reset Data">
          <RotateCcw size={18} />
          <span>Reset</span>
        </button>

        <button className={styles.actionBtn} onClick={toggleTheme} title="Toggle Theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className={styles.actionBtn} title="Mobile View">
          <Smartphone size={18} />
        </button>

        <button className={clsx(styles.actionBtn, isPreviewMode && styles.active)} onClick={onPreviewToggle}>
          <Eye size={18} />
          <span>Live Preview</span>
        </button>

        <button className={styles.primaryBtn} onClick={onExport}>
          <Download size={18} />
          <span>PDF Export</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
