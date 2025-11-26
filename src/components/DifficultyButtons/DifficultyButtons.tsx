import React from 'react';
import DifficultyButton from '../DifficultyButton/DifficultyButton';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setDifficulty } from '../../store/gameSlice';
import { DIFFICULTY_LEVELS, Difficulty } from '../../constants/difficultyLevels';
import { formatTime } from '../../utils/helpers/time';
import styles from './DifficultyButtons.module.scss';

const DifficultyButtons: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { difficulty } = useAppSelector(state => state.game);

  return (
    <div className={styles.difficultyButtons}>
      {(Object.keys(DIFFICULTY_LEVELS) as Difficulty[]).map(
        (level: string | number): React.JSX.Element => (
          <DifficultyButton
            key={level}
            level={level}
            numberOfQuestions={DIFFICULTY_LEVELS[level].questions}
            time={formatTime(DIFFICULTY_LEVELS[level].time)}
            isActive={difficulty === level}
            setDifficulty={level => dispatch(setDifficulty(level))}
          />
        )
      )}
    </div>
  );
};

export default DifficultyButtons;
