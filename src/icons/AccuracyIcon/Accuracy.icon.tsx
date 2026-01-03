import React from 'react';
import classNames from 'classnames';
import styles from './AccuracyIcon.module.scss';

interface AccuracyIconProps {
  animated?: boolean;
  className?: string;
}

export const AccuracyIcon = ({ animated = false, className }: AccuracyIconProps) => {
  const iconClass = classNames(styles.icon, className, {
    [styles.animated]: animated,
  });
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M6 20v-6" className={styles.line1} />
      <path d="M12 20V10" className={styles.line2} />
      <path d="M18 20V4" className={styles.line3} />
    </svg>
  );
};
