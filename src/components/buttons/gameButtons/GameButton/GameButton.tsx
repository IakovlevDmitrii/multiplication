import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../../BaseButton/BaseButton';
import { GAME_BUTTON_TYPES, GameButtonType } from '../../../../utils/constants/gameButtonTypes';
import styles from './GameButton.module.scss';

interface GameButtonProps extends Omit<BaseButtonProps, 'className'> {
  keyType: GameButtonType;
}

const GameButton: React.FC<GameButtonProps> = (props): React.JSX.Element => {
  const className = classNames(
    styles.gameButton,
    styles[props.keyType],
    { [styles.disabled]: props.disabled },
  );

  return <BaseButton {...props} className={className} />;
};

export { GAME_BUTTON_TYPES };
export default GameButton;