import React from 'react';
import styles from './SummaryHeader.module.scss';

interface SummaryHeaderProps {
  percentage: number;
}

export const SummaryHeader = ({ percentage }: SummaryHeaderProps) => {
  const getSuccessLevel = () => {
    if (percentage >= 90) return 'excellent';
    if (percentage >= 70) return 'good';
    if (percentage >= 50) return 'average';
    return 'needs-improvement';
  };

  const successLevel = getSuccessLevel();
  const successMessages = {
    excellent: 'Отлично!',
    good: 'Хорошо!',
    average: 'Неплохо!',
    'needs-improvement': 'Продолжайте тренироваться!',
  };

  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Итог</h3>
      <div className={styles.status}>
        <span className={`${styles.statusBadge} ${styles[successLevel]}`}>
          {successMessages[successLevel]}
        </span>
      </div>
    </header>
  );
};
