import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { PageLayout } from '../../components/layout';
import { TimeSettings, QuestionCountSettings } from '../../components/features';
import { GameButton } from '../../components/ui';
import type { OutletContext } from '../../types';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  const { onStartGame } = useOutletContext<OutletContext>();
  return (
    <PageLayout>
      <div className={styles.layout}>
        <div className={styles.settings}>
          <QuestionCountSettings />
          <TimeSettings />
        </div>
        <div className={styles.start}>
          <GameButton onClick={onStartGame}>Начать</GameButton>
        </div>
      </div>
    </PageLayout>
  );
};
