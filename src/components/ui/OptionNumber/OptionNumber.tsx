import React from 'react';
import styles from './OptionNumber.module.scss';

interface OptionNumberProps {
  number: number;
}

export const OptionNumber = ({ number }: OptionNumberProps) => {
  return (
    <div className={styles.display}>
      <span className={styles.number}>{number}</span>
    </div>
  );
};
