import React from 'react';
import classNames from 'classnames';
import { SpecialKey } from '../SpecialKey';
import { BackspaceIcon } from '../../../../../icons';
import { useAppDispatch } from '../../../../../hooks';
import { backspaceAnswer } from '../../../../../store/gameSlice';
import styles from './BackSpaceKey.module.scss';

interface BackSpaceKeyProps {
  className: string;
}

export const BackSpaceKey = ({ className }: BackSpaceKeyProps) => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(backspaceAnswer());
  return (
    <SpecialKey
      onClick={handleKeyPress}
      className={classNames(styles.key, className)}
      aria-label="Удалить последнюю цифру"
    >
      <BackspaceIcon />
    </SpecialKey>
  );
};
