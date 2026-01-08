import React from 'react';
import classNames from 'classnames';
import { SmallCard } from '../../../../ui';
import { useAppSelector } from '../../../../../hooks';
import styles from './Question.module.scss';

interface ExampleProps {
  className?: string;
}

export const Question = ({ className }: ExampleProps) => {
  const { currentQuestion, results, settings } = useAppSelector(state => state.game);
  const shouldShowQuestion = currentQuestion && results.length < settings.questionCount;
  return (
    <SmallCard
      className={classNames(styles.display, className)}
      data-has-question={shouldShowQuestion}
    >
      <div className={styles.question}>
        {shouldShowQuestion ? `${currentQuestion.num1}×${currentQuestion.num2}=` : ''}
      </div>
    </SmallCard>
  );
};
