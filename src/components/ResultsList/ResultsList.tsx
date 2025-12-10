import React from 'react';
import { ResultItem } from '../ResultItem/ResultItem';
import { useAppSelector } from '../../hooks';
import type { GameResult } from '../../types';
import styles from './ResultsList.module.scss';

export const ResultsList = () => {
  const { results } = useAppSelector(state => state.game);
  return (
    <div className={styles.list}>
      {results.map((result: GameResult, index) => (
        <ResultItem
          key={index}
          question={result.question}
          answer={result.userAnswer}
          isCorrect={result.isCorrect}
          correctAnswer={result.correctAnswer}
        />
      ))}
    </div>
  );
};
