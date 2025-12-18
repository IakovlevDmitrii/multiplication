import React from 'react';
import { OptionNumber } from '../../../../ui';
import { MULTIPLIERS_RANGE } from '../../../../../constants';
import styles from './NumberGroup.module.scss';

interface NumberGroupProps {
  selectedNumber: number;
  setSelectedNumber: (num: number) => void;
}

export const NumberGroup = ({ selectedNumber, setSelectedNumber }: NumberGroupProps) => {
  const increment = () => {
    const currentIndex = MULTIPLIERS_RANGE.indexOf(selectedNumber);
    if (currentIndex < MULTIPLIERS_RANGE.length - 1) {
      setSelectedNumber(MULTIPLIERS_RANGE[currentIndex + 1]);
    }
  };

  const decrement = () => {
    const currentIndex = MULTIPLIERS_RANGE.indexOf(selectedNumber);
    if (currentIndex > 0) {
      setSelectedNumber(MULTIPLIERS_RANGE[currentIndex - 1]);
    }
  };
  return (
    <div className={styles.group}>
      <div className={styles.title}>Число для тренировки</div>
      <div className={styles.selector}>
        <button
          type="button"
          className={styles.controlButton}
          onClick={decrement}
          disabled={selectedNumber === MULTIPLIERS_RANGE[0]}
        >
          −
        </button>
        <OptionNumber number={selectedNumber} />
        <button
          type="button"
          className={styles.controlButton}
          onClick={increment}
          disabled={selectedNumber === MULTIPLIERS_RANGE[MULTIPLIERS_RANGE.length - 1]}
        >
          +
        </button>
      </div>
    </div>
  );
};
