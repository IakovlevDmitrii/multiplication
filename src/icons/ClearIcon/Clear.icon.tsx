import React from 'react';
import classNames from 'classnames';
import styles from './ClearIcon.module.scss';

interface ClearIconProps {
  className?: string;
}

export const ClearIcon = ({ className }: ClearIconProps) => {
  const iconClass = classNames(styles.icon, className);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" strokeWidth="1" />
      <path d="M3 3v5h5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
