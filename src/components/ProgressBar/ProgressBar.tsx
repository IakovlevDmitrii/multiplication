import React from 'react';
import { useAppSelector, useTimer } from '../../utils/hooks';
import { getTimeColor } from '../../utils/helpers/time';
import styles from './ProgressBar.module.scss';

const ProgressBar: React.FC = (): React.JSX.Element => {
  const { results, totalQuestions } = useAppSelector(state => state.game);
  const { timeProgress } = useTimer();
  const questionsProgress: number = results.length / totalQuestions;
  return (
    <div className={styles.progressContainer}>
      <div className={styles.bars}>
        <div className={styles.timeBarContainer}>
          <div
            className={styles.timeBar}
            style={{
              width: `${timeProgress * 100}%`,
              background: getTimeColor(timeProgress),
            }}
          />
        </div>
        <div className={styles.questionsBarContainer}>
          <div className={styles.questionsBar} style={{ width: `${questionsProgress * 100}%` }} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
