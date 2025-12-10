import React from 'react';
import { useAppSelector } from '../../hooks';
import styles from './GameSummary.module.scss';

export const GameSummary = () => {
  const { score } = useAppSelector(state => state.game);
  const { questionCount } = useAppSelector(state => state.game.settings);
  const accuracy = Math.round((score / questionCount) * 100);
  return (
    <div className={styles.summary}>
      <div className={styles.score}>
        Правильных ответов: <strong>{score}</strong> из <strong>{questionCount}</strong>
      </div>
      <div className={styles.accuracy}>
        Точность: <strong>{accuracy}%</strong>
      </div>
    </div>
  );
};
