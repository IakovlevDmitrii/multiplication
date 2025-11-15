import React from 'react';
import KeyButton, { KEY_BUTTON_VARIANTS } from '../KeyButton';
import { useAppDispatch } from '../../../../utils/hooks/redux';
import { backspaceAnswer } from '../../../../store/gameSlice';

const BackSpaceKeyButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(backspaceAnswer());

  return (
    <KeyButton keyType={KEY_BUTTON_VARIANTS.BACKSPACE} onClick={handleKeyPress}>
      ⌫
    </KeyButton>
  );
};

export default BackSpaceKeyButton;
