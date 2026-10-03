import { skillCategories } from '../data/skills';
import { education } from '../data/education';
import SectionHeading from '../components/common/sectionHeading';
import Button from '../components/common/button';
import { useMeta } from '../hooks/useMeta';
import styles from './aboutPage.module.css';

export default function AboutPage() {
  useMeta('Abhinay — About', 'Software Engineer focused on backend systems, geospatial data, and AI applications.');
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>About Me</p>
          <h1 className={styles.heroTitle}>
            HI, I&apos;M
            <br />
            <span className={styles.accent}>ABHINAY.</span>
          </h1>
          <p className={styles.heroSub}>
            A Software Engineer focused on solving real-world engineering problems.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className={`section ${styles.introSection}`}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introLeft}>
            <div className={styles.avatarBlock} aria-hidden="true">
              <div className={styles.avatarInner}>
                <span className={styles.avatarInitials}>A</span>
              </div>
              <div className={styles.avatarGlow} />
            </div>
          </div>

          <div className={styles.introRight}>
            <h2 className={styles.introHeading}>Building systems that matter.</h2>
            <p className={styles.introText}>
              I&apos;m a Software Engineer currently working as a Junior Research Engineer
              at IIT Delhi, where I build geospatial data platforms and AI-powered
              applications.
            </p>
            <p className={styles.introText}>
              My background spans backend architecture, distributed systems, 3D
              visualization, and machine learning integration. I enjoy working on
              technically challenging problems that have real-world impact.
            </p>
            <p className={styles.introText}>
              I&apos;m pursuing my MCA from K. R. Mangalam University and I&apos;m always
              looking for opportunities to build interesting things with great people.
            </p>

            <div className={styles.stats}>
              {[
                { val: '2+', label: 'Years Experience' },
                { val: '5+', label: 'Projects Built' },
                { val: '2', label: 'Internships' },
                { val: '1', label: 'Research Role' },
              ].map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statVal}>{stat.val}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <Button to="/contact" showArrow>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={`section ${styles.philosophySection}`}>
        <div className="container">
          <div className={styles.quote}>
            <span className={styles.quoteMarker} aria-hidden="true">&ldquo;</span>
            <blockquote className={styles.quoteText}>
              I believe good software is not only about writing code.
              <br /><br />
              It is about understanding the problem,
              designing the system, and building something
              that creates real value.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <SectionHeading
            label="Skills"
            title="TECHNOLOGY & EXPERTISE"
            description="Technologies and tools I use to build production-ready systems."
          />

          <div className={styles.skillsGrid}>
            {skillCategories.map((cat) => (
              <div key={cat.id} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryLabel}>{cat.label}</h3>
                <div className={styles.skillList}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className={styles.skillItem}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`section ${styles.eduSection}`}>
        <div className="container">
          <SectionHeading label="Education" title="ACADEMIC BACKGROUND" />

          <div className={styles.eduList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduCard}>
                <div className={styles.eduYear}>
                  {edu.startYear} — {edu.endYear}
                </div>
                <div className={styles.eduContent}>
                  <h3 className={styles.eduDegree}>{edu.degree}</h3>
                  <p className={styles.eduInstitution}>{edu.institution}</p>
                  {edu.description && (
                    <p className={styles.eduDesc}>{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
