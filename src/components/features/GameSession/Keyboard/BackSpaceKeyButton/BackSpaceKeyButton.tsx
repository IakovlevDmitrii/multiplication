import React from 'react';
import classNames from 'classnames';
import { KeyButton, KEY_BUTTON_VARIANTS } from '../KeyButton';
import { BackspaceIcon } from '../../../../../icons';
import { useAppDispatch } from '../../../../../hooks';
import { backspaceAnswer } from '../../../../../store/gameSlice';
import styles from './BackSpaceKeyButton.module.scss';

interface BackKeyButtonProps {
  className?: string;
}

export const BackSpaceKeyButton = ({ className }: BackKeyButtonProps) => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(backspaceAnswer());
  const keyClassName = classNames(styles.key, className);
  return (
    <KeyButton
      keyType={KEY_BUTTON_VARIANTS.BACKSPACE}
      onClick={handleKeyPress}
      className={keyClassName}
    >
      <BackspaceIcon />
    </KeyButton>
  );
};
