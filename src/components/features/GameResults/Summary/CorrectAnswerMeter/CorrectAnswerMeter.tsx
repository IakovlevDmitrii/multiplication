import React from 'react';
import { SummaryCard } from '../SummaryCard';
import { StatusIndicator } from '../../../../ui';
import styles from './CorrectAnswerMeter.module.scss';

interface CorrectAnswerMeterProps {
  score: number;
  questionCount: number;
  percentage: number;
}

export const CorrectAnswerMeter = ({
  score,
  questionCount,
  percentage,
}: CorrectAnswerMeterProps) => {
  return (
    <SummaryCard
      icon={<StatusIndicator isCorrect className={styles.icon} />}
      label="Правильные ответы"
      value={
        <div className={styles.value}>
          <span className={styles.scoreNumber}>{score}</span>
          <span className={styles.scoreTotal}>/{questionCount}</span>
        </div>
      }
    >
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
        <div className={styles.progressLabel}>{percentage}%</div>
      </div>
    </SummaryCard>
  );
};
