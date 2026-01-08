import React from 'react';
import classNames from 'classnames';
import { Key } from '../Key';
import styles from './SpecialKey.module.scss';

interface SpecialKeyProps {
  children: React.ReactNode;
  onClick: () => void;
  'aria-label': string;
  className?: string;
  disabled?: boolean;
}

export const SpecialKey = ({
  children,
  onClick,
  'aria-label': ariaLabel,
  className,
  disabled,
}: SpecialKeyProps) => {
  return (
    <Key
      className={classNames(styles.key, className)}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </Key>
  );
};
