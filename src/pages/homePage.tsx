import { Suspense, lazy, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { featuredTechnologies } from '../data/skills';
import SectionHeading from '../components/common/sectionHeading';
import Button from '../components/common/button';
import { useMeta } from '../hooks/useMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './homePage.module.css';

const HeroScene = lazy(() => import('../three/scenes/heroScene'));

const heroWords = ['BUILDING', 'REAL-WORLD', 'SYSTEMS.'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.6 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.heroCanvas}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <motion.p
            className={styles.heroLabel}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <span className={styles.heroDot} />
            Software Engineer
          </motion.p>

          <motion.h1
            className={styles.heroHeading}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label="Building real-world systems"
          >
            {heroWords.map((word, i) => (
              <span key={word} className={styles.heroWordWrap}>
                <motion.span
                  className={`${styles.heroWord} ${i === 2 ? styles.heroAccent : ''}`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            Backend systems &middot; Geospatial &middot; AI/ML &middot; Scalable Web
          </motion.p>

          <motion.p
            className={styles.heroDesc}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            I design and build scalable software systems, geospatial data
            platforms, and AI-powered applications that solve real-world
            problems.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.75 }}
          >
            <Button to="/work" showArrow size="lg">
              View My Work
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              About Me
            </Button>
          </motion.div>
        </div>
      </div>

      <div className={styles.heroScroll} aria-hidden="true">
        <span className={styles.heroScrollLine} />
        <span className={styles.heroScrollText}>Scroll</span>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section className={`section ${styles.featuredSection}`}>
      <div className="container">
        <div ref={ref} className={`${styles.sectionHeader} reveal ${visible ? 'visible' : ''}`}>
          <SectionHeading
            label="Featured Projects"
            title="SELECTED WORK"
          />
          <Button to="/work" variant="ghost" showArrow>
            All Projects
          </Button>
        </div>

        <div className={styles.projectsList}>
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.projectRow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.projectMeta}>
                <span className={styles.projectNumber}>{project.number}</span>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.shortDescription}</p>
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.projectActions}>
                <Link to={`/work/${project.id}`} className={styles.viewBtn}>
                  View Project <ArrowRight size={16} />
                </Link>
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceBtn}
                  >
                    Source Code
                  </a>
                )}
              </div>

              <div className={styles.projectVisual} aria-hidden="true">
                <div className={styles.projectVisualInner}>
                  <div className={styles.visualGrid}>
                    {Array.from({ length: 12 }).map((_, j) => (
                      <div key={j} className={`${styles.gridCell} ${j % 3 === i % 3 ? styles.gridCellActive : ''}`} />
                    ))}
                  </div>
                  <div className={styles.visualLabel}>{project.category}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <p className={styles.sectionLabel}>About Me</p>
            <h2 className={styles.aboutHeading}>
              I DESIGN AND BUILD
              <br />
              SCALABLE DIGITAL
              <br />
              <span className={styles.heroAccent}>SYSTEMS.</span>
            </h2>
          </div>

          <div className={styles.aboutRight}>
            <p className={styles.aboutText}>
              I&apos;m a Software Engineer with a focus on backend architecture,
              geospatial data systems, and AI integration. Currently working as
              a Junior Research Engineer at IIT Delhi.
            </p>
            <p className={styles.aboutText}>
              My work spans from processing large-scale LiDAR point clouds to
              building predictive search engines and AI management platforms.
              I care deeply about system design, performance, and creating
              real-world impact.
            </p>

            <div className={styles.aboutStats}>
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

            <Button to="/about" showArrow variant="secondary">
              More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section className={`section ${styles.techSection}`}>
      <div className="container">
        <SectionHeading
          label="Technology"
          title="TOOLS & STACK"
          description="A curated set of technologies I work with to build scalable systems."
        />

        <div className={styles.techGrid}>
          {featuredTechnologies.map((tech) => (
            <div key={tech} className={styles.techItem}>
              <Cpu size={14} className={styles.techIcon} />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperiencePreview() {
  return (
    <section className={`section ${styles.expSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <SectionHeading label="Experience" title="CAREER PATH" />
          <Button to="/experience" variant="ghost" showArrow>
            Full Timeline
          </Button>
        </div>

        <div className={styles.expList}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.expRow}>
              <div className={styles.expYear}>
                {exp.startDate} {exp.current ? '— Present' : `— ${exp.endDate}`}
              </div>
              <div className={styles.expDivider} />
              <div className={styles.expContent}>
                <h4 className={styles.expRole}>{exp.role}</h4>
                <p className={styles.expCompany}>{exp.company}</p>
              </div>
              <div className={styles.expBadge}>
                {exp.type === 'research' ? 'Research' : exp.type === 'internship' ? 'Internship' : 'Projects'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaInner}>
          <p className={styles.ctaLabel}>Open to Opportunities</p>
          <h2 className={styles.ctaHeading}>
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className={styles.heroAccent}>INTERESTING.</span>
          </h2>
          <p className={styles.ctaDesc}>
            I&apos;m always open to new projects, collaborations, and interesting
            engineering challenges.
          </p>
          <Button to="/contact" size="lg" showArrow>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useMeta(
    'Abhinay — Software Engineer',
    'Building scalable backend systems, geospatial data platforms, and AI-powered applications.'
  );
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <TechSection />
      <ExperiencePreview />
      <FinalCta />
    </>
  );
}
