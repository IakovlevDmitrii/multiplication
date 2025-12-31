import React from 'react';
import classNames from 'classnames';
import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
  isCorrect: boolean;
  className?: string;
}

export const StatusIndicator = ({ isCorrect, className }: StatusIndicatorProps) => {
  const statusClassName = classNames(styles.statusIndicator, className, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });

  return (
    <div className={statusClassName}>
      <span className={styles.statusIcon}>{isCorrect ? '✓' : '✗'}</span>
    </div>
  );
};
