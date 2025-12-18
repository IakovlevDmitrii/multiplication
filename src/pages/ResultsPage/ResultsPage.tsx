import React from 'react';
import { PageLayout } from '../../components/layout';
import { ResultsList, Summary } from '../../components/features';
import { GameButton } from '../../components/ui';
import type { OutletContext } from '../../types';
import { useOutletContext } from 'react-router-dom';
import styles from './ResultsPage.module.scss';

export const ResultsPage = () => {
  const { onStartGame } = useOutletContext<OutletContext>();
  return (
    <PageLayout>
      <div className={styles.layout}>
        <h2 className={styles.title}>Результаты</h2>
        <Summary />
        <ResultsList />
        <GameButton onClick={onStartGame}>Повторить</GameButton>
      </div>
    </PageLayout>
  );
};
