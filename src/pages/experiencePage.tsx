import { experiences } from '../data/experience';
import { education } from '../data/education';
import SectionHeading from '../components/common/sectionHeading';
import { useMeta } from '../hooks/useMeta';
import styles from './experiencePage.module.css';

export default function ExperiencePage() {
  useMeta('Abhinay — Experience', 'Career timeline: Junior Research Engineer at IIT Delhi, internship at EarthSense Labs.');
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Experience"
            title="CAREER & EDUCATION"
            description="My journey through software engineering, research, and continuous learning."
          />
        </div>
      </div>

      {/* Work Experience */}
      <section className={`section ${styles.expSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Work Experience</h2>

          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div className={styles.timelineDot} />
                  {i < experiences.length - 1 && (
                    <div className={styles.timelineLine} />
                  )}
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.timePeriod}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </div>

                  <div className={styles.expCard}>
                    <div className={styles.expHeader}>
                      <div>
                        <h3 className={styles.expRole}>{exp.role}</h3>
                        <p className={styles.expCompany}>{exp.company}</p>
                        <p className={styles.expLocation}>{exp.location}</p>
                      </div>
                      <span className={styles.expTypeBadge}>
                        {exp.type === 'research'
                          ? 'Research'
                          : exp.type === 'internship'
                          ? 'Internship'
                          : 'Projects'}
                      </span>
                    </div>

                    <p className={styles.expDesc}>{exp.description}</p>

                    <div className={styles.responsibilities}>
                      <h4 className={styles.responsibilitiesLabel}>
                        Key Responsibilities
                      </h4>
                      <ul className={styles.responsibilityList}>
                        {exp.responsibilities.map((r) => (
                          <li key={r} className={styles.responsibilityItem}>
                            <span className={styles.bullet} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.techStack}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`section ${styles.eduSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Education</h2>

          <div className={styles.timeline}>
            {education.map((edu, i) => (
              <div key={edu.id} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div className={`${styles.timelineDot} ${styles.timelineDotEdu}`} />
                  {i < education.length - 1 && (
                    <div className={styles.timelineLine} />
                  )}
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.timePeriod}>
                    {edu.startYear} — {edu.endYear}
                  </div>

                  <div className={styles.expCard}>
                    <h3 className={styles.expRole}>{edu.degree}</h3>
                    <p className={styles.expCompany}>{edu.institution}</p>
                    {edu.description && (
                      <p className={styles.expDesc}>{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
