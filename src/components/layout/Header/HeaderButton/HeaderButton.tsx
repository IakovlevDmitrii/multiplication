import React from 'react';
import classNames from 'classnames';
import styles from './HeaderButton.module.scss';

interface HeaderButtonProps {
  title: string;
  ariaLabel: string;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const HeaderButton = ({
  title,
  ariaLabel,
  className,
  onClick,
  children,
}: HeaderButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, className)}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
