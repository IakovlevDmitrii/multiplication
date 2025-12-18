import React from 'react';
import classNames from 'classnames';
import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
  isCorrect: boolean;
}

export const StatusIndicator = ({ isCorrect }: StatusIndicatorProps) => {
  const className = classNames(styles.statusIndicator, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });

  return (
    <div className={className}>
      <span className={styles.statusIcon}>{isCorrect ? '✓' : '✗'}</span>
    </div>
  );
};
