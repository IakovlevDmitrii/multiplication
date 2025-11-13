import React from 'react';
import KeyButton from '../KeyButton/KeyButton';
import { backspaceAnswer } from '../../../../store/gameSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import type { KeyType } from '../../../../types';

const BackSpaceKeyButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const keyType: KeyType = 'backspace';
  const onKeyPress = () => dispatch(backspaceAnswer());

  return (
    <KeyButton keyType={keyType} onClick={onKeyPress}>
      ⌫
    </KeyButton>
  );
};

export default BackSpaceKeyButton;