import React from 'react';
import classNames from 'classnames';
import { SpecialKey } from '../SpecialKey';
import { SubmitIcon } from '../../../../../icons';
import { useAppDispatch } from '../../../../../hooks';
import { checkAnswer } from '../../../../../store/gameSlice';
import styles from './SubmitKey.module.scss';

interface SubmitKeyProps {
  className?: string;
}

export const SubmitKey = ({ className }: SubmitKeyProps) => {
  const dispatch = useAppDispatch();
  const onAnswerClick = () => dispatch(checkAnswer());
  return (
    <SpecialKey
      onClick={onAnswerClick}
      className={classNames(styles.key, className)}
      aria-label="Отправить ответ"
    >
      <SubmitIcon />
    </SpecialKey>
  );
};
