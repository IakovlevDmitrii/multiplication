import React from 'react';
import classNames from 'classnames';
import { Number } from '../Number';
import styles from './QuestionSection.module.scss';

interface QuestionSectionProps {
  isCorrect: boolean;
  question: string;
  answer: number;
}

export const QuestionSection = ({ isCorrect, question, answer }: QuestionSectionProps) => {
  const [num1, num2] = question.split(' × ');
  const className = classNames(styles.questionSection, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });

  return (
    <div className={className}>
      <div className={styles.numbers}>
        <Number className={styles.number}>{num1}</Number>
        <span className={styles.multiply}>×</span>
        <Number className={styles.number}>{num2}</Number>
      </div>
      <div className={styles.equals}>
        <span className={styles.equalsIcon}>=</span>
      </div>
      <div className={styles.equation}>
        <Number className={styles.number}>{answer}</Number>
      </div>
    </div>
  );
};
