import React from 'react';
import classNames from 'classnames';
import styles from './BackspaceIcon.module.scss';

interface BackspaceIconProps {
  className?: string;
}

export const BackspaceIcon = ({ className }: BackspaceIconProps) => {
  const iconClass = classNames(styles.icon, className);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" className={styles.box} />
      <path d="M14 10l-4 4m0-4l4 4" className={styles.cross} />
    </svg>
  );
};
