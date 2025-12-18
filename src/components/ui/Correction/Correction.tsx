import React from 'react';
import styles from './Correction.module.scss';

interface CorrectionProps {
  correctAnswer: number;
}

export const Correction = ({ correctAnswer }: CorrectionProps) => {
  return (
    <div className={styles.correction}>
      <span className={styles.correctionIcon}>↳</span>
      <span className={styles.correctionFullText}>
        Правильно: <strong className={styles.correctValue}>{correctAnswer}</strong>
      </span>
      <span className={styles.correctionCompactText}>
        <strong className={styles.correctValue}>{correctAnswer}</strong>
      </span>
    </div>
  );
};
