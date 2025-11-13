import React from 'react';
import KeyButton from '../KeyButton/KeyButton';
import { appendToAnswer } from '../../../../store/gameSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import type { KeyType } from '../../../../types';

const NumberKeyButton: React.FC<{ numberKey: string }> = (
  { numberKey }
): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const keyType: KeyType = 'number';
  const onKeyPress = () => dispatch(appendToAnswer(numberKey));

  return (
    <KeyButton keyType={keyType} onClick={onKeyPress}>
      {numberKey}
    </KeyButton>
  );
};

export default NumberKeyButton;