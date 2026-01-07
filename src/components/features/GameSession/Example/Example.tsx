import React from 'react';
import { ProgressBar } from './ProgressBar';
import { Question } from './Question';
import { UserAnswer } from './UserAnswer';
import styles from './Example.module.scss';

export const Example = () => {
  return (
    <ProgressBar>
      <div className={styles.questionContent}>
        <Question className={styles.example} />
        <UserAnswer className={styles.answer} />
      </div>
    </ProgressBar>
  );
};
