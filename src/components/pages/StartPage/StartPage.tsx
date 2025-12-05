import React from 'react';
import { StartPageLayout } from '../../Layout';
import QuestionCountSettings from '../../Settings/QuestionCountSettings/QuestionCountSettings';
import TimeSettings from '../../Settings/TimeSettings/TimeSettings';
import StartGameButton from '../../buttons/gameButtons/StartGameButton/StartGameButton';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  return (
    <StartPageLayout>
      <div className={styles.startPage}>
        <h1 className={styles.title}>Умножение</h1>

        <div className={styles.settings}>
          <div className={styles.settingGroup}>
            <QuestionCountSettings />
          </div>
          <div className={styles.settingGroup}>
            <TimeSettings />
          </div>
        </div>

        <div className={styles.startButton}>
          <StartGameButton />
        </div>
      </div>
    </StartPageLayout>
  );
};
