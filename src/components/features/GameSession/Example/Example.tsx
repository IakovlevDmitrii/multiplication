import React from 'react';
import { Card } from '../../../ui';
import { Question } from './Question';
import { UserAnswer } from './UserAnswer';
import { useAppSelector, useTimer } from '../../../../hooks';
import styles from './Example.module.scss';

export const Example = () => {
  const { results } = useAppSelector(state => state.game);
  const { questionCount } = useAppSelector(state => state.game.settings);
  const { timeProgress } = useTimer();
  const questionsProgress = questionCount > 0 ? Math.min(results.length / questionCount, 1) : 0;
  return (
    <Card className={styles.example}>
      <div className={styles.barContainer}>
        <div className={styles.timeBar} style={{ width: `${timeProgress * 100}%` }} />
      </div>
      <div className={styles.exampleContainer}>
        <Question className={styles.question} />
        <UserAnswer className={styles.answer} />
      </div>
      <div className={styles.barContainer}>
        <div className={styles.questionsBar} style={{ width: `${questionsProgress * 100}%` }} />
      </div>
    </Card>
  );
};
