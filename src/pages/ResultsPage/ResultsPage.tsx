import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Page } from '../../components/layout';
import { ResultsList, Summary } from '../../components/features';
import { GameButton } from '../../components/ui';
import type { OutletContext } from '../../types';
import styles from './ResultsPage.module.scss';

export const ResultsPage = () => {
  const { onStartGame } = useOutletContext<OutletContext>();
  return (
    <Page className={styles.page}>
      <Summary />
      <ResultsList />
      <GameButton onClick={onStartGame}>Повторить</GameButton>
    </Page>
  );
};
