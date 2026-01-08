import React, { useMemo } from 'react';
import { Card, SmallCard } from '../../../ui';
import { ResultsListHeader } from './ResultsListHeader';
import { ResultItem } from './ResultItem';
import { useAppSelector } from '../../../../hooks';
import type { GameResult } from '../../../../types';
import styles from './ResultsList.module.scss';

export const ResultsList = (): React.JSX.Element | null => {
  const { results } = useAppSelector(state => state.game);

  const stats = useMemo(() => {
    const correctCount = results.filter(r => r.isCorrect).length;
    const incorrectCount = results.length - correctCount;
    const accuracy = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;

    return {
      correctCount,
      incorrectCount,
      accuracy,
      total: results.length,
    };
  }, [results]);

  if (!results || !results.length) {
    return (
      <div className={styles.emptyList}>
        <div className={styles.emptyText}>Результаты появятся здесь после игры</div>
      </div>
    );
  }

  return (
    <Card className={styles.listContainer}>
      <ResultsListHeader stats={stats} />
      <SmallCard>
        <div className={styles.list}>
          {results.map((result: GameResult, index) => (
            <ResultItem
              key={index}
              index={index}
              question={result.question}
              answer={result.userAnswer}
              isCorrect={result.isCorrect}
              correctAnswer={result.correctAnswer}
            />
          ))}
        </div>
      </SmallCard>
    </Card>
  );
};
