import React from 'react';
import classNames from 'classnames';
import { Number } from '../Number';
import styles from './Correction.module.scss';

interface CorrectionProps {
  correctAnswer: number;
  className?: string;
}

export const Correction = ({ correctAnswer, className }: CorrectionProps) => {
  return (
    <div className={classNames(styles.correction, className)}>
      <strong>
        <Number className={styles.correctValue}>{correctAnswer}</Number>
      </strong>
    </div>
  );
};
