import React from 'react';
import classNames from 'classnames';
import { KeyButton, KEY_BUTTON_VARIANTS } from '../KeyButton';
import { useAppDispatch } from '../../../../../hooks';
import { checkAnswer } from '../../../../../store/gameSlice';
import styles from './SubmitKeyButton.module.scss';

interface SubmitKeyButtonProps {
  className?: string;
}

export const SubmitKeyButton = ({ className }: SubmitKeyButtonProps) => {
  const dispatch = useAppDispatch();
  const onAnswerClick = () => dispatch(checkAnswer());
  const keyClassName = classNames(styles.key, className);
  return (
    <KeyButton
      keyType={KEY_BUTTON_VARIANTS.SUBMIT}
      onClick={onAnswerClick}
      className={keyClassName}
    >
      Ответить
    </KeyButton>
  );
};
