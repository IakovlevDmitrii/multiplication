import React from 'react';
import classNames from 'classnames';
import { GameButtonType } from './constants';
import styles from './GameButton.module.scss';

interface GameButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  keyType: GameButtonType;
  disabled?: boolean;
}

export const GameButton = ({ children, onClick, keyType, disabled = false }: GameButtonProps) => {
  const className = classNames(styles.gameButton, styles[keyType], {
    [styles.disabled]: disabled,
  });
  return (
    <button className={className} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
};
