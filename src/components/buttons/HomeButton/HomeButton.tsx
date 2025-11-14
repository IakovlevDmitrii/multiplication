import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../utils/hooks/redux';
import { goToMainMenu } from '../../../store/gameSlice';
import styles from './HomeButton.module.scss';

const HomeButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoToMainMenu = () => {
    dispatch(goToMainMenu());
    navigate('/');
  };

  return (
    <button
      className={styles.homeButton}
      onClick={handleGoToMainMenu}
      title="В главное меню"
    >
      🏠
    </button>
  );
};

export default HomeButton;