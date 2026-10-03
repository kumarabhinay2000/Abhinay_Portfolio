import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/sectionHeading';
import { useMeta } from '../hooks/useMeta';
import styles from './workPage.module.css';

const filterTags = ['All', 'Backend', 'AI', 'Geospatial', 'Web', '3D'];

export default function WorkPage() {
  useMeta('Abhinay — Work', 'Selected projects: EarthSense LiDAR platform, AdiVaani AI engine, UniSearch predictive search.');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <SectionHeading
            label="Work"
            title="SELECTED WORK"
            description="A collection of systems, platforms, experiments, and products I've built."
          />
        </div>
      </div>

      <div className="container">
        {/* Filters */}
        <div className={styles.filters} role="tablist" aria-label="Filter projects">
          {filterTags.map((tag) => (
            <button
              key={tag}
              role="tab"
              aria-selected={activeFilter === tag}
              className={`${styles.filterBtn} ${activeFilter === tag ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className={styles.projectsGrid}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No projects match this filter.</p>
            </div>
          ) : (
            filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className={styles.cardVisual}>
                  <div className={styles.cardVisualBg}>
                    <div className={styles.cardVisualContent}>
                      <span className={styles.cardNumber}>{project.number}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <span className={styles.cardYear}>{project.year}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.shortDescription}</p>

                  <div className={styles.techStack}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={styles.techBadge}>+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className={styles.cardActions}>
                    <Link to={`/work/${project.id}`} className={styles.viewBtn}>
                      View Project <ArrowRight size={14} />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="Source code"
                      >
                        <GitFork size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
