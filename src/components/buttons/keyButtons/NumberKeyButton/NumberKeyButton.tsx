import React, { useCallback } from 'react';
import KeyButton, { KEY_BUTTON_VARIANTS } from '../KeyButton/index';
import { useAppDispatch } from '../../../../utils/hooks';
import { appendToAnswer } from '../../../../store/gameSlice';

interface NumberKeyButtonProps {
  numberKey: string;
}

const NumberKeyButton: React.FC<NumberKeyButtonProps> = ({ numberKey }): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const handleKeyPress = useCallback(() => {
    dispatch(appendToAnswer(numberKey));
  }, [dispatch, numberKey]);

  return (
    <KeyButton keyType={KEY_BUTTON_VARIANTS.NUMBER} onClick={handleKeyPress}>
      {numberKey}
    </KeyButton>
  );
};

export default NumberKeyButton;
