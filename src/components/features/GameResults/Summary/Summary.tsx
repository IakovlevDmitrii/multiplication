import React from 'react';
import { Card } from '../../../ui';
import { SummaryHeader } from './SummaryHeader';
import { CorrectAnswerMeter } from './CorrectAnswerMeter';
import { AccuracyMeter } from './AccuracyMeter';
import { SummaryFooter } from './SummaryFooter';
import { useAppSelector } from '../../../../hooks';
import styles from './Summary.module.scss';

export const Summary = () => {
  const { score, results } = useAppSelector(state => state.game);
  const { questionCount } = useAppSelector(state => state.game.settings);

  const accuracy = questionCount > 0 ? Math.round((score / questionCount) * 100) : 0;
  const percentage = Math.round((score / questionCount) * 100);

  return (
    <Card className={styles.summary}>
      <SummaryHeader percentage={percentage} />
      <div className={styles.stats}>
        <CorrectAnswerMeter score={score} questionCount={questionCount} percentage={percentage} />
        <AccuracyMeter accuracy={accuracy} />
      </div>
      <SummaryFooter results={results} percentage={percentage} />
    </Card>
  );
};
