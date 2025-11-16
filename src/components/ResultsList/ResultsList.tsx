import React from 'react';
import ResultItem from '../ResultItem/ResultItem';
import { useAppSelector } from '../../utils/hooks/redux';
import type { GameResult } from '../../types/game';
import styles from './ResultsList.module.scss';

const ResultsList: React.FC = (): React.JSX.Element => {
  const { results } = useAppSelector(state => state.game);
  return (
    <div className={styles.resultsList}>
      {results.map((result: GameResult, index: number): React.JSX.Element => {
        return (
          <ResultItem
            key={index}
            question={result.question}
            answer={result.userAnswer}
            isCorrect={result.isCorrect}
            correctAnswer={result.correctAnswer}
          />
        );
      })}
    </div>
  );
};

export default ResultsList;
