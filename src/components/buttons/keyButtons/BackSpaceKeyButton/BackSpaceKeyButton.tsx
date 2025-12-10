import React from 'react';
import { KeyButton, KEY_BUTTON_VARIANTS } from '../KeyButton';
import { useAppDispatch } from '../../../../hooks';
import { backspaceAnswer } from '../../../../store/gameSlice';

export const BackSpaceKeyButton = () => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(backspaceAnswer());
  return (
    <KeyButton keyType={KEY_BUTTON_VARIANTS.BACKSPACE} onClick={handleKeyPress}>
      ⌫
    </KeyButton>
  );
};
