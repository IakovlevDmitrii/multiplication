import React from 'react';
import { HeaderStatItem } from './HeaderStatItem';
import { AccuracyLabel, StatusIndicator } from '../../../../ui';
import styles from './ResultsListHeader.module.scss';

interface ResultsListHeaderProps {
  stats: { correctCount: number; incorrectCount: number; accuracy: number };
}

export const ResultsListHeader = ({ stats }: ResultsListHeaderProps) => {
  const { correctCount, incorrectCount, accuracy } = stats;
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Детализация ответов</h3>
      <div className={styles.listStats}>
        <HeaderStatItem icon={<StatusIndicator isCorrect />} value={correctCount} />
        <HeaderStatItem icon={<StatusIndicator isCorrect={false} />} value={incorrectCount} />
        <HeaderStatItem icon={<AccuracyLabel />} value={accuracy} />
      </div>
    </header>
  );
};
