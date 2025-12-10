import React from 'react';
import classNames from 'classnames';
import { KeyButtonType } from './constants';
import styles from './KeyButton.module.scss';

interface KeyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  keyType: KeyButtonType;
  disabled?: boolean;
}

export const KeyButton = ({ children, onClick, keyType, disabled = false }: KeyButtonProps) => {
  const className = classNames(styles.keyButton, styles[keyType], {
    [styles.disabled]: disabled,
  });
  return (
    <button className={className} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
};
