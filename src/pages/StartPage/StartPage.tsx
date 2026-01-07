import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Page } from '../../components/layout';
import { TimeSettings, QuestionCountSettings } from '../../components/features';
import { GameButton } from '../../components/ui';
import type { OutletContext } from '../../types';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  const { onStartGame } = useOutletContext<OutletContext>();
  return (
    <Page className={styles.page}>
      <QuestionCountSettings />
      <TimeSettings />
      <GameButton onClick={onStartGame}>Начать</GameButton>
    </Page>
  );
};
