import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../../BaseButton';
import { KeyButtonType } from './constants';
import styles from './KeyButton.module.scss';

interface KeyButtonProps extends Omit<BaseButtonProps, 'className'> {
  keyType: KeyButtonType;
}

const KeyButton: React.FC<KeyButtonProps> = (props): React.JSX.Element => {
  const className = classNames(
    styles.keyButton,
    styles[props.keyType],
    { [styles.disabled]: props.disabled }
  );

  return <BaseButton {...props} className={className} />;
};

export default KeyButton;