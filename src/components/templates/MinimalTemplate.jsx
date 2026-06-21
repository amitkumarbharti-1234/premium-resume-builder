import React from 'react';
import styles from './MinimalTemplate.module.css';

const MinimalTemplate = ({ data }) => {
  const { personal, education, experience, skills, projects } = data;

  return (
    <div className={styles.resume}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personal.fullName || 'Your Name'}</h1>
        <p className={styles.contact}>
          {personal.email} {personal.phone && `| ${personal.phone}`} {personal.location && `| ${personal.location}`}
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.mainContent}>
          {personal.summary && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Summary</h2>
              <p className={styles.text}>{personal.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              {experience.map(exp => (
                <div key={exp.id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>{exp.position}</h3>
                    <span className={styles.itemDate}>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className={styles.itemSubtitle}>{exp.company}</div>
                  <p className={styles.text}>{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {projects.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              {projects.map(proj => (
                <div key={proj.id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>{proj.title}</h3>
                  </div>
                  <div className={styles.itemSubtitle}>{proj.link}</div>
                  <p className={styles.text}>{proj.description}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        <div className={styles.sideContent}>
          {education.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              {education.map(edu => (
                <div key={edu.id} className={styles.item}>
                  <h3 className={styles.itemTitle}>{edu.degree}</h3>
                  <div className={styles.itemSubtitle}>{edu.school}</div>
                  <div className={styles.itemDate}>{edu.startDate} - {edu.endDate}</div>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <ul className={styles.skillsList}>
                {skills.map(s => (
                  <li key={s.id}>{s.name}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;
