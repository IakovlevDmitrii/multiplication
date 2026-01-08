import React from 'react';
import classNames from 'classnames';
import styles from './Key.module.scss';

interface KeyProps {
  children: React.ReactNode;
  onClick: () => void;
  'aria-label': string;
  className?: string;
  disabled?: boolean;
}

export const Key = ({
  children,
  onClick,
  'aria-label': ariaLabel,
  className,
  disabled,
}: KeyProps) => {
  return (
    <button
      className={classNames(styles.key, className)}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
      <span className={styles.buttonGlow} />
    </button>
  );
};
