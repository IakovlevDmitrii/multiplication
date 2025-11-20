import React, { useEffect, useCallback } from 'react';
import ProgressBar from '../../ProgressBar/ProgressBar';
import Example from '../../Example/Example';
import UserAnswer from '../../UserAnswer/UserAnswer';
import VirtualKeyboard from '../../VirtualKeyboard/VirtualKeyboard';
import AnswerButton from '../../buttons/gameButtons/AnswerButton/AnswerButton';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { appendToAnswer, backspaceAnswer, checkAnswer } from '../../../store/gameSlice';
import styles from './GamePage.module.scss';

const GamePage: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { userAnswer, gameState } = useAppSelector(state => state.game);

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
    <div className={styles.gamePage}>
      <div className={styles.questionSection}>
        <ProgressBar />
        <Example />
        <UserAnswer />
        <VirtualKeyboard />
        <AnswerButton />
      </div>
    </div>
  );
};

export default GamePage;
