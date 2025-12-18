import React from 'react';
import classNames from 'classnames';
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
        <span className={styles.number}>{num1}</span>
        <span className={styles.multiply}>×</span>
        <span className={styles.number}>{num2}</span>
      </div>
      <div className={styles.equals}>
        <span className={styles.equalsIcon}>=</span>
      </div>
      <div className={styles.equation}>
        <span className={styles.number}>{answer}</span>
      </div>
    </div>
  );
};
