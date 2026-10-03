import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './loadingScreen.module.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let current = 0;
    const steps = [
      { target: 30, delay: 100 },
      { target: 60, delay: 200 },
      { target: 85, delay: 150 },
      { target: 100, delay: 300 },
    ];

    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex >= steps.length) {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 700);
        }, 300);
        return;
      }
      const step = steps[stepIndex];
      setTimeout(() => {
        setProgress(step.target);
        current = step.target;
        stepIndex++;
        runStep();
      }, step.delay);
    };

    runStep();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Noise texture */}
          <div className={styles.noise} aria-hidden="true" />

          <div className={styles.content}>
            <motion.div
              className={styles.logoWrap}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={styles.logo}>ABHINAY</span>
              <span className={styles.logoSub}>Software Engineer</span>
            </motion.div>

            <motion.div
              className={styles.progressWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressBar}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <span className={styles.progressNum}>{progress}%</span>
            </motion.div>
          </div>

          <motion.div
            className={styles.corner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {['Backend', 'Geospatial', 'AI/ML', '3D Web'].map((tag, i) => (
              <motion.span
                key={tag}
                className={styles.tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
