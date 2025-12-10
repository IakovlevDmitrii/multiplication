import React from 'react';
import classNames from 'classnames';
import styles from './ResultItem.module.scss';

interface ResultItemProps {
  question: string;
  answer: number;
  isCorrect: boolean;
  correctAnswer: number;
}

export const ResultItem = ({ question, answer, isCorrect, correctAnswer }: ResultItemProps) => {
  const className = classNames(styles.item, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });
  return (
    <div className={className}>
      <span className={styles.question}>
        {question} = {answer}
      </span>
      {!isCorrect && (
        <span className={styles.correctAnswer}>Правильный ответ: {correctAnswer}</span>
      )}
    </div>
  );
};
