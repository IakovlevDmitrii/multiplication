import React from 'react';
import classNames from 'classnames';
import styles from './DifficultyButton.module.scss';

interface DifficultyButtonProps {
  level: string | number;
  numberOfQuestions: number;
  time: string;
  isActive: boolean;
  setDifficulty: (level: string | number) => void;
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({
  level,
  numberOfQuestions,
  time,
  isActive,
  setDifficulty,
}): React.JSX.Element => (
  <button
    className={classNames(styles.difficultyBtn, {
      [styles.active]: isActive,
    })}
    onClick={(): void => setDifficulty(level)}
  >
    <div className={styles.diffLevel}>{level}</div>
    <div className={styles.diffInfo}>{numberOfQuestions} вопросов</div>
    <div className={styles.diffInfo}>{time}</div>
  </button>
);

export default DifficultyButton;
