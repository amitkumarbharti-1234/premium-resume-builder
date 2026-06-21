import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FormPanel.module.css';
import PersonalForm from './sections/PersonalForm';
import ArrayForm from './sections/ArrayForm';
import { useResume } from '../../context/ResumeContext';

const FormPanel = ({ activeTab }) => {
  const { data, updateArrayItem, addArrayItem, removeArrayItem } = useResume();

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalForm />;
      case 'education':
        return (
          <ArrayForm
            title="Education"
            section="education"
            items={data.education}
            fields={[
              { name: 'school', label: 'School / University', type: 'text' },
              { name: 'degree', label: 'Degree', type: 'text' },
              { name: 'startDate', label: 'Start Date', type: 'text' },
              { name: 'endDate', label: 'End Date', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' }
            ]}
          />
        );
      case 'experience':
        return (
          <ArrayForm
            title="Experience"
            section="experience"
            items={data.experience}
            fields={[
              { name: 'company', label: 'Company', type: 'text' },
              { name: 'position', label: 'Position / Title', type: 'text' },
              { name: 'startDate', label: 'Start Date', type: 'text' },
              { name: 'endDate', label: 'End Date', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' }
            ]}
          />
        );
      case 'skills':
        return (
          <ArrayForm
            title="Skills"
            section="skills"
            items={data.skills}
            fields={[
              { name: 'name', label: 'Skill Name', type: 'text' },
              { name: 'level', label: 'Proficiency Level', type: 'text' }
            ]}
          />
        );
      case 'projects':
        return (
          <ArrayForm
            title="Projects"
            section="projects"
            items={data.projects}
            fields={[
              { name: 'title', label: 'Project Title', type: 'text' },
              { name: 'link', label: 'Project Link', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' }
            ]}
          />
        );
      case 'certifications':
        return (
          <ArrayForm
            title="Certifications"
            section="certifications"
            items={data.certifications}
            fields={[
              { name: 'name', label: 'Certification Name', type: 'text' },
              { name: 'issuer', label: 'Issuer', type: 'text' },
              { name: 'date', label: 'Date', type: 'text' }
            ]}
          />
        );
      case 'languages':
        return (
          <ArrayForm
            title="Languages"
            section="languages"
            items={data.languages}
            fields={[
              { name: 'name', label: 'Language', type: 'text' },
              { name: 'proficiency', label: 'Proficiency', type: 'text' }
            ]}
          />
        );
      case 'links':
        return (
          <ArrayForm
            title="Links"
            section="links"
            items={data.links}
            fields={[
              { name: 'label', label: 'Label (e.g. LinkedIn)', type: 'text' },
              { name: 'url', label: 'URL', type: 'text' }
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FormPanel;
