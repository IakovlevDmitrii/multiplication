import React from 'react';
import classNames from 'classnames';
import { KeyButtonType } from './constants';
import { getAriaLabel } from './helper';
import styles from './KeyButton.module.scss';

interface KeyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  keyType: KeyButtonType;
  disabled?: boolean;
  className?: string;
}

export const KeyButton = ({ children, onClick, keyType, disabled, className }: KeyButtonProps) => {
  const keyClassName = classNames(styles.keyButton, className, {
    [styles.hasIcon]: typeof children !== 'string',
  });

  return (
    <button
      className={keyClassName}
      onClick={onClick}
      type="button"
      aria-label={getAriaLabel(keyType, children)}
      disabled={disabled}
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
