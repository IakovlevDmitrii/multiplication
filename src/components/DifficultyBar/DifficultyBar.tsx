import React from 'react';
import { useAppSelector } from '../../utils/hooks/redux';
import styles from './DifficultyBar.module.scss';

const DifficultyBar: React.FC = (): React.JSX.Element => {
  const { difficulty } = useAppSelector(state => state.game);

  return (
    <div className={styles.difficulty}>
      Сложность: <span className={styles.difficultyBadge}>{difficulty}</span>
    </div>
  );
};

export default DifficultyBar;
