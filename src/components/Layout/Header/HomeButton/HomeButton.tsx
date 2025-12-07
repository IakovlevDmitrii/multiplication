import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks';
import { goToMainMenu } from '../../../../store/gameSlice';
import styles from '../HeaderButtons.module.scss';

const HomeButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoToMainMenu = () => {
    dispatch(goToMainMenu());
    navigate('/');
  };

  return (
    <button
      type="button"
      className={styles.headerButton}
      onClick={handleGoToMainMenu}
      title="В главное меню"
      aria-label="Главная"
    >
      <svg viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    </button>
  );
};

export default HomeButton;
