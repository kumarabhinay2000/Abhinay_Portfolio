import { Link } from 'react-router-dom';
import { GitFork, ExternalLink, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import styles from './footer.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>Abhinay</Link>
            <p className={styles.tagline}>
              Software Engineer<br />
              Building real-world systems.
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.social}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <GitFork size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <ExternalLink size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Abhinay. All rights reserved.
          </p>
          <p className={styles.made}>
            Designed & Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
