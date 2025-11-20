import React from 'react';
import { useAppSelector, useTimer } from '../../utils/hooks';
import { colors } from '../../styles/colors';
import styles from './CircleProgress.module.scss';

const CircleProgress: React.FC = (): React.JSX.Element => {
  const { userAnswer, results, totalQuestions, score } = useAppSelector(state => state.game);
  const { timeProgress } = useTimer();
  const questionsProgress: number = results.length / totalQuestions;
  const correctAnswersProgress: number = score / totalQuestions;

  const getTimeColor = (progress: number): string => {
    if (progress <= 0.3) return colors.timeSafe;
    if (progress <= 0.6) return colors.timeWarning;
    if (progress <= 0.8) return colors.timeDanger;
    return colors.timeCritical;
  };
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle}>
        <div
          className={styles.timeRing}
          style={
            {
              '--progress': timeProgress,
              '--color': getTimeColor(timeProgress),
            } as React.CSSProperties
          }
        />
        <div
          className={styles.questionsRing}
          style={{ '--progress': questionsProgress } as React.CSSProperties}
        />
        <div
          className={styles.correctRing}
          style={{ '--progress': correctAnswersProgress } as React.CSSProperties}
        />
        <div className={styles.answerCenter}>
          <span
            className={styles.answer}
            style={
              {
                '--color': getTimeColor(timeProgress),
              } as React.CSSProperties
            }
          >
            {userAnswer || '?'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
