import React from 'react';
import Timer from '../Timer/Timer';
import { useAppSelector } from '../../utils/hooks/redux';
import styles from './ProgressBars.module.scss';

const ProgressBars: React.FC = (): React.JSX.Element => {
  const { gameState, results, score, totalQuestions } = useAppSelector(state => state.game);
  const progress = results.length + 1;

  return (
    <div className={styles.progress}>
      {gameState === 'playing' && <Timer />}
      Вопрос {progress} из {totalQuestions}
      <div className="score">Правильных ответов: {score}</div>
    </div>
  );
};

export default ProgressBars;