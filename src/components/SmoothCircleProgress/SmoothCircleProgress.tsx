import React from 'react';
import { useAppSelector, useTimer } from '../../utils/hooks';
import styles from './SmoothCircleProgress.module.scss';

const SmoothCircleProgress: React.FC = (): React.JSX.Element => {
  const { userAnswer, results, totalQuestions, score } = useAppSelector(state => state.game);
  const { timeProgress } = useTimer();
  const questionsProgress: number = results.length / totalQuestions;
  const correctAnswersProgress: number = score / totalQuestions;
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle}>
        {/* Время - внешнее кольцо */}
        <svg className={styles.ring} viewBox="0 0 100 100">
          <circle className={styles.timeTrack} cx="50" cy="50" r="45" />
          <circle
            className={styles.timeProgress}
            cx="50"
            cy="50"
            r="45"
            stroke={timeProgress > 0.3 ? '#4ECDC4' : '#FF6B6B'}
            strokeDasharray={283}
            strokeDashoffset={283 - 283 * timeProgress}
          />
        </svg>

        {/* Вопросы - среднее кольцо */}
        <svg className={styles.ring} viewBox="0 0 100 100">
          <circle className={styles.questionsTrack} cx="50" cy="50" r="35" />
          <circle
            className={styles.questionsProgress}
            cx="50"
            cy="50"
            r="35"
            stroke="#667eea"
            strokeDasharray={220}
            strokeDashoffset={220 - 220 * questionsProgress}
          />
        </svg>

        {/* Правильные ответы - внутреннее кольцо */}
        <svg className={styles.ring} viewBox="0 0 100 100">
          <circle className={styles.correctTrack} cx="50" cy="50" r="25" />
          <circle
            className={styles.correctProgress}
            cx="50"
            cy="50"
            r="25"
            stroke="#96CEB4"
            strokeDasharray={157}
            strokeDashoffset={157 - 157 * correctAnswersProgress}
          />
        </svg>

        {/* Центр с ответом */}
        <div className={styles.answerCenter}>
          <span className={styles.answer}>{userAnswer || '?'}</span>
        </div>
      </div>
    </div>
  );
};

export default SmoothCircleProgress;
