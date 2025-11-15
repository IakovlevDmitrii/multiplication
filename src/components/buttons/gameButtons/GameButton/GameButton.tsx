import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../../BaseButton';
import { GameButtonType } from './constants';
import styles from './GameButton.module.scss';

interface GameButtonProps extends Omit<BaseButtonProps, 'className'> {
  keyType: GameButtonType;
}

const GameButton: React.FC<GameButtonProps> = (props): React.JSX.Element => {
  const className = classNames(styles.gameButton, styles[props.keyType], {
    [styles.disabled]: props.disabled,
  });

  return <BaseButton {...props} className={className} />;
};

export default GameButton;
