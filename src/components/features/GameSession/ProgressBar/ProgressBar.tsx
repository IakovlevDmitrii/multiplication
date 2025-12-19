import React from 'react';
import { useAppSelector, useTimer } from '../../../../hooks';
import styles from './ProgressBar.module.scss';

export const ProgressBar = () => {
  const { results } = useAppSelector(state => state.game);
  const { questionCount } = useAppSelector(state => state.game.settings);
  const { timeProgress } = useTimer();
  const questionsProgress = questionCount > 0 ? Math.min(results.length / questionCount, 1) : 0;
  return (
    <div className={styles.bars}>
      <div className={styles.barContainer}>
        <div className={styles.timeBar} style={{ width: `${timeProgress * 100}%` }} />
      </div>
      <div className={styles.barContainer}>
        <div className={styles.questionsBar} style={{ width: `${questionsProgress * 100}%` }} />
      </div>
    </div>
  );
};
