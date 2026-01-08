import React from 'react';
import classNames from 'classnames';
import { SpecialKey } from '../SpecialKey';
import { ClearIcon } from '../../../../../icons';
import { useAppDispatch } from '../../../../../hooks';
import { clearAnswer } from '../../../../../store/gameSlice';
import styles from './ClearKey.module.scss';

interface ClearKeyProps {
  className: string;
}

export const ClearKey = ({ className }: ClearKeyProps) => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(clearAnswer());
  return (
    <SpecialKey
      onClick={handleKeyPress}
      className={classNames(styles.key, className)}
      aria-label="Очистить ответ"
    >
      <ClearIcon />
    </SpecialKey>
  );
};
