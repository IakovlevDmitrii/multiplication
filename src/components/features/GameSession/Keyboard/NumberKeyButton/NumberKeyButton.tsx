import React, { useCallback } from 'react';
import classNames from 'classnames';
import { KeyButton, KEY_BUTTON_VARIANTS } from '../KeyButton';
import { useAppDispatch } from '../../../../../hooks';
import { appendToAnswer } from '../../../../../store/gameSlice';
import styles from './NumberKeyButton.module.scss';

interface NumberKeyButtonProps {
  numberKey: string;
  className?: string;
}

export const NumberKeyButton = ({ numberKey, className }: NumberKeyButtonProps) => {
  const dispatch = useAppDispatch();
  const handleKeyPress = useCallback(() => {
    dispatch(appendToAnswer(numberKey));
  }, [dispatch, numberKey]);
  const keyClassName = classNames(styles.key, className);
  return (
    <KeyButton
      keyType={KEY_BUTTON_VARIANTS.NUMBER}
      onClick={handleKeyPress}
      className={keyClassName}
    >
      {numberKey}
    </KeyButton>
  );
};
