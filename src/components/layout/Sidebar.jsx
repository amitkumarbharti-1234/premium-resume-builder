import React from 'react';
import styles from './Sidebar.module.css';
import { User, GraduationCap, Briefcase, Wrench, FolderGit2, Award, Languages, Link as LinkIcon, Sparkles } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'languages', label: 'Languages', icon: Languages },
  { id: 'links', label: 'Links', icon: LinkIcon },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className={clsx('glass-panel', styles.sidebar)}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <Sparkles className={styles.iconSparkle} size={24} />
        </div>
        <h1 className={styles.logoText}>Resume<span className="gradient-text">Builder</span></h1>
      </div>

      <nav className={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={clsx(styles.navItem, activeTab === item.id && styles.active)}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={20} className={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.footer}>
        <p>Made with ❤️ by Amit Kumar</p>
        <a href="mailto:adarsh964835@gmail.com" className={styles.footerEmail}>
          adarsh964835@gmail.com
        </a>
        <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className={styles.footerBtn}>
          Built for Digital Heroes
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
