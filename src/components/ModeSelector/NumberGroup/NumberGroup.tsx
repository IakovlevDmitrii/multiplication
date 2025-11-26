import React from 'react';
import styles from './NumberGroup.module.scss';

interface NumberGroupProps {
  label: string;
  numbers: number[];
  selectedNumber: number;
  setSelectedNumber: (num: number) => void;
}

const NumberGroup: React.FC<NumberGroupProps> = ({
  label,
  numbers,
  selectedNumber,
  setSelectedNumber,
}): React.JSX.Element => {
  const increment = () => {
    const currentIndex = numbers.indexOf(selectedNumber);
    if (currentIndex < numbers.length - 1) {
      setSelectedNumber(numbers[currentIndex + 1]);
    }
  };

  const decrement = () => {
    const currentIndex = numbers.indexOf(selectedNumber);
    if (currentIndex > 0) {
      setSelectedNumber(numbers[currentIndex - 1]);
    }
  };
  return (
    <div className={styles.numberGroup}>
      <label className={styles.label}>{label}</label>

      <div className={styles.centeredSelector}>
        <div className={styles.numberControl}>
          <button
            type="button"
            className={styles.controlButton}
            onClick={decrement}
            disabled={selectedNumber === numbers[0]}
          >
            −
          </button>

          <div className={styles.numberDisplay}>
            <span className={styles.number}>{selectedNumber}</span>
          </div>

          <button
            type="button"
            className={styles.controlButton}
            onClick={increment}
            disabled={selectedNumber === numbers[numbers.length - 1]}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberGroup;
