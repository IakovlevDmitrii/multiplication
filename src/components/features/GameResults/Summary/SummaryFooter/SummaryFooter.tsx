import React from 'react';
import type { GameResult } from '../../../../../types';
import styles from './SummaryFooter.module.scss';

interface SummaryFooterProps {
  results: GameResult[];
  percentage: number;
}
export const SummaryFooter = ({ results, percentage }: SummaryFooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.timeInfo}>
        <span className={styles.timeIcon}>⏱️</span>
        <span className={styles.timeText}>{results.length} вопросов пройдено</span>
      </div>
      <div className={styles.perfectionIndicator}>
        <span className={styles.perfectionIcon}>🏆</span>
        <span className={styles.perfectionText}>
          {percentage === 100 ? 'Идеальный результат!' : `До идеала: ${100 - percentage}%`}
        </span>
      </div>
    </footer>
  );
};
