import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import styles from './notFoundPage.module.css';

export default function NotFoundPage() {
  useMeta('404 — Page Not Found | Abhinay');

  return (
    <div className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            className={styles.code}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            404
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            PAGE NOT
            <br />
            <span className={styles.accent}>FOUND.</span>
          </motion.h1>

          <motion.p
            className={styles.desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Link to="/" className={styles.btnPrimary}>
              <Home size={16} />
              Go Home
            </Link>
            <button onClick={() => window.history.back()} className={styles.btnSecondary}>
              <ArrowLeft size={16} />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.bigNum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          aria-hidden="true"
        >
          404
        </motion.div>
      </div>
    </div>
  );
}
