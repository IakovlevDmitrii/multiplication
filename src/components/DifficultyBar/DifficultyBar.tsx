import React from 'react';
import { useAppSelector } from '../../hooks';
import styles from './DifficultyBar.module.scss';

const DifficultyBar: React.FC = (): React.JSX.Element => {
  const { difficulty } = useAppSelector(state => state.game);

  return (
    <div className={styles.difficulty}>
      <div className={styles.difficultyBadge}>{difficulty}</div>
    </div>
  );
};

export default DifficultyBar;
