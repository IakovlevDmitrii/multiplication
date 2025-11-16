import React from 'react';
import GameSummary from '../../GameSummary/GameSummaty';
import ResultsList from '../../ResultsList/ResultsList';
import PlayAgainButton from '../../buttons/gameButtons/PlayAgainButton/PlayAgainButton';
import MainMenuButton from '../../buttons/gameButtons/MainMenuButton/MainMenuButton';
import styles from './ResultsPage.module.scss';

const ResultsPage: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.resultsScreen}>
      <h2>Игра завершена!</h2>
      <GameSummary />
      <h3>Результаты:</h3>
      <ResultsList />
      <div className={styles.resultButtons}>
        <PlayAgainButton />
        <MainMenuButton />
      </div>
    </div>
  );
};

export default ResultsPage;
