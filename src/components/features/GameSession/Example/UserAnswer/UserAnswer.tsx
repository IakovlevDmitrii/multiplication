import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { SmallCard } from '../../../../ui';
import { useAppSelector } from '../../../../../hooks';
import styles from './UserAnswer.module.scss';

interface UserAnswerProps {
  className?: string;
}

export const UserAnswer = ({ className }: UserAnswerProps) => {
  const { userAnswer } = useAppSelector(state => state.game);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prevAnswerRef = useRef('');

  const isEmpty = !userAnswer || userAnswer.length === 0;

  useEffect(() => {
    if (userAnswer && userAnswer.length > prevAnswerRef.current.length) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 300);
      return () => clearTimeout(timer);
    }
    prevAnswerRef.current = userAnswer || '';
  }, [userAnswer]);

  const renderAnswer = () => {
    if (isEmpty) return '?';

    return userAnswer.split('').map((digit, index) => {
      const isLast = index === userAnswer.length - 1;

      return (
        <span
          key={index}
          className={classNames(styles.answerDigit, {
            [styles.lastDigitAnimating]: isLast && shouldAnimate,
          })}
        >
          {digit}
        </span>
      );
    });
  };

  return (
    <SmallCard
      className={classNames(styles.display, className, {
        [styles.hasAnswer]: !isEmpty,
      })}
    >
      <div
        className={classNames(styles.answer, {
          [styles.empty]: isEmpty,
        })}
      >
        {renderAnswer()}
      </div>
    </SmallCard>
  );
};
