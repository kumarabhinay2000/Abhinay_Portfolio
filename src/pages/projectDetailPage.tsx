import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, GitFork, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/common/button';
import styles from './projectDetailPage.module.css';

export default function ProjectDetailPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectSlug);
  const currentIndex = projects.findIndex((p) => p.id === projectSlug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    if (!project) navigate('/work', { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <Link to="/work" className={styles.backBtn}>
            <ArrowLeft size={16} />
            All Projects
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span className={styles.projectNumber}>{project.number}</span>
              <span className={styles.projectCategory}>{project.category}</span>
              <span className={styles.projectYear}>{project.year}</span>
            </div>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <p className={styles.heroDesc}>{project.shortDescription}</p>

            <div className={styles.heroActions}>
              {project.liveUrl && (
                <Button href={project.liveUrl} external showArrow>
                  Live Demo
                </Button>
              )}
              {project.sourceUrl && (
                <Button href={project.sourceUrl} external variant="secondary">
                  <GitFork size={16} />
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroVisualInner}>
            <span className={styles.heroVisualLabel}>{project.title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarLabel}>Technologies</h3>
              <div className={styles.techStack}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarLabel}>Links</h3>
                <div className={styles.links}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                      <GitFork size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>

          {/* Main content */}
          <div className={styles.content}>
            {project.overview && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>Overview</h2>
                <p className={styles.contentText}>{project.overview}</p>
              </section>
            )}

            {project.problem && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>The Problem</h2>
                <p className={styles.contentText}>{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>The Solution</h2>
                <p className={styles.contentText}>{project.solution}</p>
              </section>
            )}

            {project.architecture && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>Architecture</h2>
                <p className={styles.contentText}>{project.architecture}</p>
              </section>
            )}

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>Key Features</h2>
                <ul className={styles.featureList}>
                  {project.keyFeatures.map((feat) => (
                    <li key={feat} className={styles.featureItem}>
                      <CheckCircle size={16} className={styles.featureIcon} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>Challenges</h2>
                <p className={styles.contentText}>{project.challenges}</p>
              </section>
            )}

            {project.results && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>Results & Impact</h2>
                <p className={styles.contentText}>{project.results}</p>
              </section>
            )}

            {project.technicalDetails && (
              <section className={styles.contentSection}>
                <h2 className={styles.contentHeading}>Technical Details</h2>
                <p className={styles.contentText}>{project.technicalDetails}</p>
              </section>
            )}
          </div>
        </div>

        {/* Next project */}
        {nextProject && (
          <div className={styles.nextProject}>
            <p className={styles.nextLabel}>Next Project</p>
            <Link to={`/work/${nextProject.id}`} className={styles.nextCard}>
              <div className={styles.nextInfo}>
                <span className={styles.nextNumber}>{nextProject.number}</span>
                <h3 className={styles.nextTitle}>{nextProject.title}</h3>
                <p className={styles.nextDesc}>{nextProject.shortDescription}</p>
              </div>
              <ArrowRight size={24} className={styles.nextArrow} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
