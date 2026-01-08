import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Key } from '../Key';
import { useAppDispatch } from '../../../../../hooks';
import { appendToAnswer } from '../../../../../store/gameSlice';
import styles from './NumberKey.module.scss';

interface NumberKeyProps {
  numberKey: string;
  className?: string;
}

export const NumberKey = ({ numberKey, className }: NumberKeyProps) => {
  const dispatch = useAppDispatch();
  const handleKeyPress = useCallback(() => {
    dispatch(appendToAnswer(numberKey));
  }, [dispatch, numberKey]);
  return (
    <Key
      onClick={handleKeyPress}
      aria-label={`Цифра ${numberKey}`}
      className={classNames(styles.key, className)}
    >
      {numberKey}
    </Key>
  );
};
