import React from 'react';
import { useAppSelector } from '../../hooks';
import styles from './UserAnswer.module.scss';

const UserAnswer = () => {
  const { userAnswer } = useAppSelector(state => state.game);
  return (
    <div className={styles.answerDisplay}>
      <span className={styles.answer}>{userAnswer || '?'}</span>
    </div>
  );
};

export default UserAnswer;
