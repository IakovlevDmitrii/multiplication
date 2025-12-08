import React from 'react';
import { useAppSelector } from '../../hooks';
import styles from './Example.module.scss';

const Example = () => {
  const { currentQuestion, results, settings } = useAppSelector(state => state.game);

  const shouldShowQuestion = currentQuestion && results.length < settings.questionCount;

  return (
    <div className={styles.example}>
      <div className={styles.question}>
        {shouldShowQuestion && `${currentQuestion.num1} × ${currentQuestion.num2} =`}
      </div>
    </div>
  );
};

export default Example;
