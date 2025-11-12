import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Header from '../Header/Header';
import StartPage from '../pages/StartPage/StartPage';
import GamePage from '../pages/GamePage/GamePage';
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import styles from './Game.module.scss';

const Game: React.FC = () => {
  const { currentQuestion, gameState } = useAppSelector((state) => state.game);

  return (
    <div className={styles.game}>
      <Header />
      <main className={styles.main}>
        {gameState === 'idle' && <StartPage />}
        {gameState === 'playing' && currentQuestion && <GamePage />}
        {gameState === 'finished' && <ResultsPage />}
      </main>
    </div>
  );
};

export default Game;