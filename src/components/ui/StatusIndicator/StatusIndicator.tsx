import React from 'react';
import classNames from 'classnames';
import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
  isCorrect: boolean;
  className?: string;
}

export const StatusIndicator = ({ isCorrect, className }: StatusIndicatorProps) => {
  const indicatorClassName = classNames(styles.indicator, className, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });

  return (
    <div className={indicatorClassName}>
      <span>{isCorrect ? '✓' : '✗'}</span>
    </div>
  );
};
