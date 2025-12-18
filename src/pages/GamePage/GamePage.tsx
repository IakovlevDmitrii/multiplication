import React, { useEffect, useCallback } from 'react';
import { PageLayout } from '../../components/layout';
import { ProgressBar, UserAnswer, VirtualKeyboard } from '../../components/features';
import { Example, GameButton } from '../../components/ui';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { appendToAnswer, backspaceAnswer, checkAnswer } from '../../store/gameSlice';
import styles from './GamePage.module.scss';

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const { userAnswer, gameState } = useAppSelector(state => state.game);
  const onAnswerClick = () => dispatch(checkAnswer());
  const handleKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      if (gameState !== 'playing') return;

      if (e.key >= '0' && e.key <= '9') {
        dispatch(appendToAnswer(e.key));
      } else if (e.key === 'Backspace') {
        dispatch(backspaceAnswer());
      } else if (e.key === 'Enter') {
        e.preventDefault();

        if (userAnswer.trim() !== '') {
          setTimeout(() => {
            dispatch(checkAnswer());
          }, 10);
        }
      }
    },
    [gameState, userAnswer, dispatch]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <PageLayout>
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.header}>
            <ProgressBar />
          </div>

          <div className={styles.content}>
            <div className={styles.questionSection}>
              <Example />
              <UserAnswer />
            </div>

            <div className={styles.controlsSection}>
              <VirtualKeyboard />
              <GameButton onClick={onAnswerClick} disabled={!userAnswer}>
                Ответить
              </GameButton>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
