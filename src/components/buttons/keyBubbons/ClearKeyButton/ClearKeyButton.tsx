import React from 'react';
import KeyButton from '../KeyButton/KeyButton';
import { clearAnswer } from '../../../../store/gameSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import type { KeyType } from "../../../../types";

const ClearKeyButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const keyType: KeyType = 'clear';
  const onKeyPress = () => dispatch(clearAnswer());

  return (
    <KeyButton keyType={keyType} onClick={onKeyPress}>
      C
    </KeyButton>
  );
};

export default ClearKeyButton;