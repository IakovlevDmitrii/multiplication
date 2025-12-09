import React from 'react';
import { PageLayout } from '../../Layout';
import GameSummary from '../../GameSummary/GameSummary';
import ResultsList from '../../ResultsList/ResultsList';
import PlayAgainButton from '../../buttons/gameButtons/PlayAgainButton/PlayAgainButton';
import styles from './ResultsPage.module.scss';

export const ResultsPage = () => (
  <PageLayout>
    <div className={styles.page}>
      <h2>Результаты</h2>
      <GameSummary />
      <ResultsList />
      <PlayAgainButton />
    </div>
  </PageLayout>
);
