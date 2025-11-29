import React from 'react';
import { ResultsPageLayout } from '../../Layout';
import GameSummary from '../../GameSummary/GameSummary';
import ResultsList from '../../ResultsList/ResultsList';
import PlayAgainButton from '../../buttons/gameButtons/PlayAgainButton/PlayAgainButton';
import styles from './ResultsPage.module.scss';

export const ResultsPage = () => {
  return (
    <ResultsPageLayout>
      <div className={styles.resultsPage}>
        <h2 className={styles.title}>Игра завершена!</h2>
        <GameSummary />
        <h3>Результаты</h3>
        <ResultsList />
        <div className={styles.resultButtons}>
          <PlayAgainButton />
        </div>
      </div>
    </ResultsPageLayout>
  );
};
