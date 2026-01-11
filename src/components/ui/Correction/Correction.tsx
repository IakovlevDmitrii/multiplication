import React from 'react';
import classNames from 'classnames';
import { SmallCard } from '../SmallCard';
import { Number } from '../Number';
import styles from './Correction.module.scss';

interface CorrectionProps {
  correctAnswer: number;
  className?: string;
}

export const Correction = ({ correctAnswer, className }: CorrectionProps) => {
  return (
    <SmallCard className={classNames(styles.correction, className)}>
      <strong>
        <Number className={styles.correctValue}>{correctAnswer}</Number>
      </strong>
    </SmallCard>
  );
};
