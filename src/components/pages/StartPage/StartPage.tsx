import React from 'react';
import { TimeSettings, QuestionCountSettings } from '../../Settings';
import StartGameButton from '../../buttons/gameButtons/StartGameButton/StartGameButton';
import styles from './StartPage.module.scss';

const StartPage: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.startPage}>
      <div className={styles.content}>
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
    </div>
  );
};

export default StartPage;
