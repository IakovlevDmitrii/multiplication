import React from 'react';
import classNames from 'classnames';
import styles from './OptionIndicatorIcon.module.scss';

interface OptionIndicatorIconProps {
  className?: string;
}

export const OptionIndicatorIcon = ({ className }: OptionIndicatorIconProps) => {
  const iconClass = classNames(styles.icon, className);

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <circle cx="12" cy="12" r="4" className={styles.circle} />
    </svg>
  );
};
