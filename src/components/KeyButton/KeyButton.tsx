import React from 'react';
import classNames from 'classnames';
import styles from './KeyButton.module.scss';

export type KeyType = 'number' | 'clear' | 'backspace';

interface KeyButtonProps {
  label: string;
  type: KeyType;
  onClick: () => void;
}

const KeyButton: React.FC<KeyButtonProps> = ({
  label,
  type = 'number',
  onClick,
}): React.JSX.Element => (
  <button
    className={classNames(styles.keyButton, {
      [styles[type]]: true,
    })}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

export default KeyButton;