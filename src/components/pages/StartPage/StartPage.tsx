import React from 'react';
import { PageLayout } from '../../Layout';
import { QuestionCountSettings } from '../../Settings/QuestionCountSettings/QuestionCountSettings';
import { TimeSettings } from '../../Settings/TimeSettings/TimeSettings';
import { StartGameButton } from '../../buttons/gameButtons';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  return (
    <PageLayout>
      <div className={styles.page}>
        <div className={styles.settings}>
          <QuestionCountSettings />
          <TimeSettings />
        </div>
        <div className={styles.startButton}>
          <StartGameButton />
        </div>
      </div>
    </PageLayout>
  );
};
