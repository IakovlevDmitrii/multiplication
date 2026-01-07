import React from 'react';
import classNames from 'classnames';
import { ClearIcon } from '../../../../../icons';
import { KeyButton, KEY_BUTTON_VARIANTS } from '../KeyButton';
import { useAppDispatch } from '../../../../../hooks';
import { clearAnswer } from '../../../../../store/gameSlice';
import styles from './ClearKeyButton.module.scss';

interface ClearKeyButtonProps {
  className?: string;
}

export const ClearKeyButton = ({ className }: ClearKeyButtonProps) => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(clearAnswer());
  const keyClassName = classNames(styles.key, className);
  return (
    <KeyButton
      keyType={KEY_BUTTON_VARIANTS.CLEAR}
      onClick={handleKeyPress}
      className={keyClassName}
    >
      <ClearIcon />
    </KeyButton>
  );
};
