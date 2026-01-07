import React from 'react';
import { Card } from '../../../../ui';
import { useAppSelector, useTimer } from '../../../../../hooks';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  children?: React.ReactNode;
}

export const ProgressBar = ({ children }: ProgressBarProps) => {
  const { results } = useAppSelector(state => state.game);
  const { questionCount } = useAppSelector(state => state.game.settings);
  const { timeProgress } = useTimer();
  const questionsProgress = questionCount > 0 ? Math.min(results.length / questionCount, 1) : 0;
  return (
    <Card className={styles.bar}>
      <div className={styles.barContainer}>
        <div className={styles.timeBar} style={{ width: `${timeProgress * 100}%` }} />
      </div>
      {children && <div className={styles.childrenContainer}>{children}</div>}
      <div className={styles.barContainer}>
        <div className={styles.questionsBar} style={{ width: `${questionsProgress * 100}%` }} />
      </div>
    </Card>
  );
};
