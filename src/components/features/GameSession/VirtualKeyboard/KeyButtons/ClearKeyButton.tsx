import React from 'react';
import { ClearIcon } from '../../../../../icons';
import { KeyButton, KEY_BUTTON_VARIANTS } from '../../../../ui/KeyButton';
import { useAppDispatch } from '../../../../../hooks';
import { clearAnswer } from '../../../../../store/gameSlice';

export const ClearKeyButton = () => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(clearAnswer());
  return (
    <KeyButton keyType={KEY_BUTTON_VARIANTS.CLEAR} onClick={handleKeyPress}>
      <ClearIcon />
    </KeyButton>
  );
};
