import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '../../../../icons';
import { useAppDispatch } from '../../../../hooks';
import { goToMainMenu } from '../../../../store/gameSlice';
import styles from './HeaderButtons.module.scss';

export const HomeButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleGoToMainMenu = () => {
    dispatch(goToMainMenu());
    navigate('/');
  };
  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleGoToMainMenu}
      title="В главное меню"
      aria-label="Главная"
    >
      <HomeIcon />
    </button>
  );
};
