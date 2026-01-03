import React from 'react';
import { ClockIcon, ToPerfectIcon } from '../../../../../icons';
import type { GameResult } from '../../../../../types';
import styles from './SummaryFooter.module.scss';

interface SummaryFooterProps {
  results: GameResult[];
  percentage: number;
}

export const SummaryFooter = ({ results, percentage }: SummaryFooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <ClockIcon animated />
        </div>
        <span className={styles.text}>{results.length} вопросов пройдено</span>
      </div>
      <div className={styles.info}>
        <span className={styles.icon}>
          <ToPerfectIcon animated />
        </span>
        <span className={styles.text}>
          {percentage === 100 ? 'Идеальный результат!' : `До идеала: ${100 - percentage}%`}
        </span>
      </div>
    </footer>
  );
};
