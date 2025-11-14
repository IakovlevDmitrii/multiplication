import React from 'react';
import classNames from 'classnames';
import BaseButton from '../../BaseButton/BaseButton';
import type { BaseButtonProps } from '../../BaseButton/BaseButton';
import { KEY_BUTTON_TYPES, KeyButtonType } from '../../../../utils/constants/keyButtonTypes';
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

export { KEY_BUTTON_TYPES };
export default KeyButton;