import React from 'react';
import KeyButton, { KEY_BUTTON_TYPES } from '../KeyButton/KeyButton';
import { useAppDispatch } from '../../../../utils/hooks/redux';
import { backspaceAnswer } from '../../../../store/gameSlice';

const BackSpaceKeyButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(backspaceAnswer());

  return (
    <KeyButton
      keyType={KEY_BUTTON_TYPES.BACKSPACE}
      onClick={handleKeyPress}
    >
      ⌫
    </KeyButton>
  );
};

export default BackSpaceKeyButton;