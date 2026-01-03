import React from 'react';
import classNames from 'classnames';
import styles from './ToPerfectIcon.module.scss';

interface ToPerfectIconProps {
  animated?: boolean;
  className?: string;
}

export const ToPerfectIcon = ({ animated = false, className }: ToPerfectIconProps) => {
  const iconClass = classNames(styles.icon, className, {
    [styles.animated]: animated,
  });

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <circle cx="12" cy="12" r="10" className={styles.bgCircle} />
      <circle cx="12" cy="12" r="10" className={styles.progressCircle} />
      <path d="m16 10-4 4-4-4" className={styles.arrow} />
    </svg>
  );
};
