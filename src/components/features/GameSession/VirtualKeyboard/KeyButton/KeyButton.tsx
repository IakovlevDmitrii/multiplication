import React from 'react';
import classNames from 'classnames';
import { KeyButtonType } from './constants';
import styles from './KeyButton.module.scss';

interface KeyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  keyType: KeyButtonType;
}

export const KeyButton = ({ children, onClick, keyType }: KeyButtonProps) => {
  const className = classNames(styles.keyButton, styles[keyType], {
    [styles.hasIcon]: typeof children !== 'string',
  });

  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
      aria-label={getAriaLabel(keyType, children)}
    >
      {typeof children === 'string' ? (
        <span className={styles.keyContent}>{children}</span>
      ) : (
        <span className={styles.iconWrapper}>{children}</span>
      )}
      <span className={styles.buttonGlow} />
    </button>
  );
};

const getAriaLabel = (keyType: string, children: React.ReactNode): string => {
  switch (keyType) {
    case 'number':
      return `Цифра ${children}`;
    case 'clear':
      return 'Очистить';
    case 'backspace':
      return 'Удалить символ';
    default:
      return 'Кнопка';
  }
};
