import React from 'react';
import { useAppSelector } from '../../utils/hooks/redux';
import styles from './Example.module.scss';

const Example: React.FC = () => {
  const { currentQuestion, userAnswer } = useAppSelector(state => state.game);

  return (
    <div className={styles.example}>
      <div className={styles.question}>
        {currentQuestion?.num1} × {currentQuestion?.num2} =
      </div>

      <div className={styles.answerDisplay}>
        {userAnswer || '?'}
      </div>
    </div>
  );
};

export default Example;