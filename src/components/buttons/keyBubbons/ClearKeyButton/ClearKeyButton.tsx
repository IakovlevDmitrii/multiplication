import React from 'react';
import KeyButton, { KEY_BUTTON_TYPES } from '../KeyButton/KeyButton';
import { useAppDispatch } from '../../../../utils/hooks/redux';
import { clearAnswer } from '../../../../store/gameSlice';

const ClearKeyButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(clearAnswer());

  return (
    <KeyButton
      keyType={KEY_BUTTON_TYPES.CLEAR}
      onClick={handleKeyPress}
    >
      C
    </KeyButton>
  );
};

export default ClearKeyButton;