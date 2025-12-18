import React from 'react';
import classNames from 'classnames';
import { Correction, QuestionSection, StatusIndicator } from '../../../../ui';
import styles from './ResultItem.module.scss';

interface ResultItemProps {
  index: number;
  question: string;
  answer: number;
  isCorrect: boolean;
  correctAnswer: number;
}

export const ResultItem = ({
  index,
  question,
  answer,
  isCorrect,
  correctAnswer,
}: ResultItemProps) => {
  const className = classNames(styles.item, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });

  return (
    <div className={className}>
      <div className={styles.itemIndex}>
        <span className={styles.indexNumber}>{index + 1}</span>
      </div>
      <QuestionSection isCorrect={isCorrect} question={question} answer={answer} />
      {!isCorrect && <Correction correctAnswer={correctAnswer} />}
      <StatusIndicator isCorrect={isCorrect} />
    </div>
  );
};
