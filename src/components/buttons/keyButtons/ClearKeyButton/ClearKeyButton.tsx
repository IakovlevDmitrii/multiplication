import React from 'react';
import KeyButton, { KEY_BUTTON_VARIANTS } from '../KeyButton';
import { useAppDispatch } from '../../../../utils/hooks';
import { clearAnswer } from '../../../../store/gameSlice';

const ClearKeyButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(clearAnswer());

  return (
    <KeyButton keyType={KEY_BUTTON_VARIANTS.CLEAR} onClick={handleKeyPress}>
      C
    </KeyButton>
  );
};

export default ClearKeyButton;
