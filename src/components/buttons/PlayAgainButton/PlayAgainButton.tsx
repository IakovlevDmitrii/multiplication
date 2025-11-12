import React from 'react';
import { useOutletContext } from "react-router-dom";
import Button from '../Button/Button';
import type { OutletContext } from '../../../types';
import styles from './PlayAgainButton.module.scss';

const PlayAgainButton: React.FC = (): React.JSX.Element => {
  const { onStartGame } = useOutletContext<OutletContext>();

  return (
    <Button
      className={styles.playAgainBtn}
      onClick={onStartGame}
    >
      Играть снова
    </Button>
  );
};

export default PlayAgainButton;