import React from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../../hooks';
import styles from './UserAnswer.module.scss';

export const UserAnswer = () => {
  const { userAnswer } = useAppSelector(state => state.game);
  const isEmpty = !userAnswer || userAnswer.length === 0;
  const renderAnswer = () => {
    if (isEmpty) return '?';

    return Array.from(userAnswer).map((digit, index) => (
      <span key={index} className={styles.answerDigit}>
        {digit}
      </span>
    ));
  };

  return (
    <div
      className={classNames(styles.answerDisplay, {
        [styles.hasAnswer]: !isEmpty,
      })}
    >
      <span
        className={classNames(styles.answer, {
          [styles.empty]: isEmpty,
        })}
      >
        {renderAnswer()}
      </span>
    </div>
  );
};
