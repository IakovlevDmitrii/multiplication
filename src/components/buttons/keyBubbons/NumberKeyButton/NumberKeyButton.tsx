import React, { useCallback } from 'react';
import KeyButton, { KEY_BUTTON_TYPES } from '../KeyButton/KeyButton';
import { useAppDispatch } from '../../../../utils/hooks/redux';
import { appendToAnswer } from '../../../../store/gameSlice';

interface NumberKeyButtonProps {
  numberKey: string;
}

const NumberKeyButton: React.FC<NumberKeyButtonProps> = ({
  numberKey,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const handleKeyPress = useCallback(() => {
    dispatch(appendToAnswer(numberKey));
  }, [dispatch, numberKey]);

  return (
    <KeyButton
      keyType={KEY_BUTTON_TYPES.NUMBER}
      onClick={handleKeyPress}
    >
      {numberKey}
    </KeyButton>
  );
};

export default NumberKeyButton;