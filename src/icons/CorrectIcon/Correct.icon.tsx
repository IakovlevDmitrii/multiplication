import React from 'react';
import classNames from 'classnames';
import styles from './CorrectIcon.module.scss';

interface CorrectIconProps {
  animated?: boolean;
  className?: string;
}

export const CorrectIcon = ({ animated = false, className }: CorrectIconProps) => {
  const iconClass = classNames(styles.icon, className, {
    [styles.animated]: animated,
  });
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M7 12l4 4" className={styles.checkPart1} />
      <path d="M11 16l6-8" className={styles.checkPart2} />
    </svg>
  );
};
