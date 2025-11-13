import React from 'react';
import classNames from 'classnames';
import type { KeyType } from "../../../../types";
import styles from './KeyButton.module.scss';

interface KeyButtonProps {
  children: React.ReactNode;
  keyType: KeyType;
  onClick: () => void;
}

const KeyButton: React.FC<KeyButtonProps> = ({
  children,
  keyType = "number",
  onClick,
}): React.JSX.Element => {
  const buttonClass: string = classNames(
    styles.button, {
      [styles[keyType]]: true,
    }
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
};

export default KeyButton;