import React from 'react';
import { AccuracyLabel, StatusIndicator } from '../../../../ui';
import styles from './ResultsListHeader.module.scss';

interface ResultsListHeaderProps {
  stats: { correctCount: number; incorrectCount: number; accuracy: number };
}

export const ResultsListHeader = ({ stats }: ResultsListHeaderProps) => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Детализация ответов</h3>
      <div className={styles.listStats}>
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <StatusIndicator isCorrect className={styles.icon} />
          </div>
          <span className={styles.statNumber}>{stats.correctCount}</span>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <StatusIndicator isCorrect={false} className={styles.icon} />
          </div>
          <span className={styles.statNumber}>{stats.incorrectCount}</span>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <AccuracyLabel className={styles.icon} />
          </div>
          <span className={styles.statNumber}>{stats.accuracy}%</span>
        </div>
      </div>
    </header>
  );
};
