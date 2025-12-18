import React from 'react';
import styles from './ResultsListHeader.module.scss';

interface ResultsListHeaderProps {
  stats: { correctCount: number; incorrectCount: number; accuracy: number };
}

export const ResultsListHeader = ({ stats }: ResultsListHeaderProps) => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Детализация ответов</h3>
      <div className={styles.listStats}>
        <span className={styles.statItem}>
          <span className={styles.statIcon}>✅</span>
          <span className={styles.statNumber}>{stats.correctCount}</span>
        </span>
        <span className={styles.statItem}>
          <span className={styles.statIcon}>❌</span>
          <span className={styles.statNumber}>{stats.incorrectCount}</span>
        </span>
        <span className={styles.statItem}>
          <span className={styles.statIcon}>🎯</span>
          <span className={styles.statNumber}>{stats.accuracy}%</span>
        </span>
      </div>
    </header>
  );
};
