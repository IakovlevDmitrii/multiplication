import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../../hooks';
import styles from './UserAnswer.module.scss';

export const UserAnswer = () => {
  const { userAnswer } = useAppSelector(state => state.game);
  const [displayAnswer, setDisplayAnswer] = useState('');
  const [lastDigit, setLastDigit] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const prevAnswerRef = useRef('');

  const isEmpty = !userAnswer || userAnswer.length === 0;

  useEffect(() => {
    if (!userAnswer) {
      setDisplayAnswer('');
      setLastDigit('');
      return;
    }

    if (userAnswer !== prevAnswerRef.current) {
      const prevLength = prevAnswerRef.current.length;
      const newLength = userAnswer.length;

      if (newLength > prevLength) {
        const newDigit = userAnswer[newLength - 1];

        setDisplayAnswer(userAnswer);
        setLastDigit(newDigit);
        setIsAnimating(true);

        const timer = setTimeout(() => {
          setIsAnimating(false);
        }, 300);

        return () => clearTimeout(timer);
      } else if (newLength < prevLength) {
        setDisplayAnswer(userAnswer);
        setLastDigit('');
        setIsAnimating(false);
      } else {
        setDisplayAnswer(userAnswer);
        setLastDigit('');
        setIsAnimating(false);
      }
    }

    prevAnswerRef.current = userAnswer;
  }, [userAnswer]);

  const renderAnswer = () => {
    if (isEmpty) return '?';

    const regularDigits = displayAnswer
      .slice(0, -1)
      .split('')
      .map((digit, index) => (
        <span key={index} className={styles.answerDigit}>
          {digit}
        </span>
      ));

    if (displayAnswer.length > 0) {
      const lastChar = displayAnswer[displayAnswer.length - 1];
      regularDigits.push(
        <span
          key="last"
          className={classNames(styles.answerDigit, {
            [styles.lastDigitAnimating]: isAnimating && lastDigit,
          })}
        >
          {lastChar}
        </span>
      );
    }

    return regularDigits;
  };

  return (
    <div
      className={classNames(styles.display, {
        [styles.hasAnswer]: !isEmpty,
      })}
    >
      <div className={styles.answerWrapper}>
        <span
          className={classNames(styles.answer, {
            [styles.empty]: isEmpty,
          })}
        >
          {renderAnswer()}
        </span>
      </div>
    </div>
  );
};
