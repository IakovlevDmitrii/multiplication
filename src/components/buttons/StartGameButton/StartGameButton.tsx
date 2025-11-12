import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../Button/Button';
import type { OutletContext } from '../../../types';
import styles from './StartGameButton.module.scss';

const StartGameButton: React.FC = (): React.JSX.Element => {
  const { onStartGame } = useOutletContext<OutletContext>();

  return (
    <Button className={styles.startGameBtn} onClick={onStartGame}>
      Начать игру
    </Button>
  );
};

export default StartGameButton;