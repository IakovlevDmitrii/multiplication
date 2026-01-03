import React from 'react';
import classNames from 'classnames';
import styles from './HomeIcon.module.scss';

interface HomeIconProps {
  className?: string;
}

export const HomeIcon = ({ className }: HomeIconProps) => {
  const iconClass = classNames(styles.icon, className);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z" className={styles.homePath} />
    </svg>
  );
};
