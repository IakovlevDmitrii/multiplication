import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../Button/Button';
import type { OutletContext } from '../../../types';
import styles from './MainMenuButton.module.scss';

const MainMenuButton: React.FC = (): React.JSX.Element => {
  const { onGoToMainMenu } = useOutletContext<OutletContext>();

  return (
    <Button
      className={styles.mainMenuBtn}
      onClick={onGoToMainMenu}
    >
      Главное меню
    </Button>
  );
};

export default MainMenuButton;