import React from 'react';
import { SmallCard } from '../../../../ui';
import { ClockIcon, ToPerfectIcon } from '../../../../../icons';
import type { GameResult } from '../../../../../types';
import styles from './SummaryResume.module.scss';

interface SummaryFooterProps {
  results: GameResult[];
  percentage: number;
}

export const SummaryResume = ({ results, percentage }: SummaryFooterProps) => {
  return (
    <SmallCard className={styles.card}>
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
    </SmallCard>
  );
};
