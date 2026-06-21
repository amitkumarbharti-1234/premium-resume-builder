import React from 'react';
import styles from './ProfessionalTemplate.module.css';

const ProfessionalTemplate = ({ data }) => {
  const { personal, education, experience, skills, projects } = data;

  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <h1 className={styles.name}>{personal.fullName || 'Your Name'}</h1>
        <div className={styles.contactInfo}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.location && <span>• {personal.location}</span>}
        </div>
        {data.links.length > 0 && (
          <div className={styles.linksInfo}>
            {data.links.map(l => <span key={l.id}>{l.url} </span>)}
          </div>
        )}
      </div>

      {personal.summary && (
        <div className={styles.section}>
          <p className={styles.summary}>{personal.summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          {experience.map(exp => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{exp.position}</h3>
                  <div className={styles.itemSubtitle}>{exp.company}</div>
                </div>
                <div className={styles.itemDate}>{exp.startDate} - {exp.endDate}</div>
              </div>
              <p className={styles.itemDescription}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {education.map(edu => (
            <div key={edu.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{edu.school}</h3>
                  <div className={styles.itemSubtitle}>{edu.degree}</div>
                </div>
                <div className={styles.itemDate}>{edu.startDate} - {edu.endDate}</div>
              </div>
              <p className={styles.itemDescription}>{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          {projects.map(proj => (
            <div key={proj.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{proj.title}</h3>
                <div className={styles.itemDate}>{proj.link}</div>
              </div>
              <p className={styles.itemDescription}>{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsList}>
            {skills.map(s => s.name).join(' • ')}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
