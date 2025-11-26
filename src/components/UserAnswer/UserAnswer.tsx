import React from 'react';
import { useAppSelector, useTimer } from '../../hooks';
import { getTimeColor } from '../../utils/helpers/time';
import styles from './UserAnswer.module.scss';

interface UserAnswerProps {}

const UserAnswer: React.FC<UserAnswerProps> = () => {
  const { userAnswer } = useAppSelector(state => state.game);
  const { timeProgress } = useTimer();
  return (
    <div className={styles.answerDisplay}>
      <span
        className={styles.answer}
        style={
          {
            '--color': getTimeColor(timeProgress),
          } as React.CSSProperties
        }
      >
        {userAnswer || '?'}
      </span>
    </div>
  );
};

export default UserAnswer;
