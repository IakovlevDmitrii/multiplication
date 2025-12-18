import React from 'react';
import classNames from 'classnames';
import styles from './GameButton.module.scss';

interface GameButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const GameButton = ({ children, onClick, disabled = false }: GameButtonProps) => {
  const className = classNames(styles.button, {
    [styles.disabled]: disabled,
  });
  return (
    <button className={className} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
};
