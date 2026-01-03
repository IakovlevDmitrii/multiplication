import React from 'react';
import classNames from 'classnames';
import styles from './ClockIcon.module.scss';

interface ClockIconProps {
  animated?: boolean;
  className?: string;
}

export const ClockIcon = ({ animated = false, className }: ClockIconProps) => {
  const iconClass = classNames(styles.icon, className, {
    [styles.animated]: animated,
  });
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <circle cx="12" cy="12" r="10" className={styles.bgCircle} />
      <circle cx="12" cy="12" r="10" className={styles.progressCircle} />
      <path d="M12 6v6l4 2" className={styles.clockHands} />
    </svg>
  );
};
