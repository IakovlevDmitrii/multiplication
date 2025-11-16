import React from 'react';
import classNames from 'classnames';
import styles from './ResultItem.module.scss';

interface ResultItemProps {
  question: string;
  answer: number;
  isCorrect: boolean;
  correctAnswer: number;
}

const ResultItem: React.FC<ResultItemProps> = ({
  question,
  answer,
  isCorrect,
  correctAnswer,
}): React.JSX.Element => {
  const className: string = classNames(styles.resultItem, {
    [styles.correct]: isCorrect,
    [styles.incorrect]: !isCorrect,
  });
  return (
    <div className={className}>
      <span className={styles.question}>{question}</span>
      <span className={styles.answer}>
        Ваш ответ: {answer}
        {!isCorrect && (
          <span className={styles.correctAnswer}>Правильный ответ: {correctAnswer}</span>
        )}
      </span>
    </div>
  );
};

export default ResultItem;
