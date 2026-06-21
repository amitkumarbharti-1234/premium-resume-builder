import React from 'react';
import styles from './ModernTemplate.module.css';

const ModernTemplate = ({ data }) => {
  const { personal, education, experience, skills, projects, certifications, languages, links } = data;

  return (
    <div className={styles.resume}>
      <div className={styles.leftColumn}>
        <div className={styles.header}>
          <h1 className={styles.name}>{personal.fullName || 'Your Name'}</h1>
          <h2 className={styles.jobTitle}>{personal.jobTitle || 'Job Title'}</h2>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <div className={styles.contactItem}>{personal.email}</div>
          <div className={styles.contactItem}>{personal.phone}</div>
          <div className={styles.contactItem}>{personal.location}</div>
        </div>

        {links.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Links</h3>
            {links.map(l => (
              <div key={l.id} className={styles.contactItem}>
                <strong>{l.label}:</strong> {l.url}
              </div>
            ))}
          </div>
        )}

        {skills.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.skillsList}>
              {skills.map(s => (
                <div key={s.id} className={styles.skillItem}>
                  <span className={styles.skillName}>{s.name}</span>
                  {s.level && <span className={styles.skillLevel}>{s.level}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Languages</h3>
            {languages.map(l => (
              <div key={l.id} className={styles.skillItem}>
                <span>{l.name}</span> - <span>{l.proficiency}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.rightColumn}>
        {personal.summary && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Profile</h3>
            <p className={styles.summary}>{personal.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Experience</h3>
            {experience.map(exp => (
              <div key={exp.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <h4 className={styles.itemTitle}>{exp.position}</h4>
                  <span className={styles.itemDate}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className={styles.itemSubtitle}>{exp.company}</div>
                <p className={styles.itemDescription}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Education</h3>
            {education.map(edu => (
              <div key={edu.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <h4 className={styles.itemTitle}>{edu.degree}</h4>
                  <span className={styles.itemDate}>{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className={styles.itemSubtitle}>{edu.school}</div>
                <p className={styles.itemDescription}>{edu.description}</p>
              </div>
            ))}
          </div>
        )}

        {projects.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Projects</h3>
            {projects.map(proj => (
              <div key={proj.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <h4 className={styles.itemTitle}>{proj.title}</h4>
                </div>
                <div className={styles.itemSubtitle}>{proj.link}</div>
                <p className={styles.itemDescription}>{proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {certifications.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Certifications</h3>
            {certifications.map(cert => (
              <div key={cert.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <h4 className={styles.itemTitle}>{cert.name}</h4>
                  <span className={styles.itemDate}>{cert.date}</span>
                </div>
                <div className={styles.itemSubtitle}>{cert.issuer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
