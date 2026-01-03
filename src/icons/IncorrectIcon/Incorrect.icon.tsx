import React from 'react';
import classNames from 'classnames';
import styles from './IncorrectIcon.module.scss';

interface IncorrectIconProps {
  animated?: boolean;
  className?: string;
}

export const IncorrectIcon = ({ animated = false, className }: IncorrectIconProps) => {
  const iconClass = classNames(styles.icon, className, {
    [styles.animated]: animated,
  });
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M7 7l10 10" className={styles.crossLine1} />
      <path d="M17 7l-10 10" className={styles.crossLine2} />
    </svg>
  );
};
