import React from 'react';
import { useAppSelector } from '../../hooks';
import styles from './GameSummary.module.scss';

const GameSummary: React.FC = (): React.JSX.Element => {
  const { score, results } = useAppSelector(state => state.game);
  const accuracy = Math.round((score / results.length) * 100);

  return (
    <div className={styles.summary}>
      <div className={styles.score}>
        Правильных ответов: <strong>{score}</strong> из <strong>{results.length}</strong>
      </div>
      <div className={styles.accuracy}>
        Точность: <strong>{accuracy}%</strong>
      </div>
    </div>
  );
};

export default GameSummary;
