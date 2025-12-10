import React from 'react';
import { GameButton, GAME_BUTTON_VARIANTS } from '../GameButton';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { checkAnswer } from '../../../../store/gameSlice';

export const AnswerButton = () => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(checkAnswer());
  const { userAnswer } = useAppSelector(state => state.game);
  return (
    <GameButton
      keyType={GAME_BUTTON_VARIANTS.ANSWER}
      onClick={handleKeyPress}
      disabled={!userAnswer}
    >
      Ответить
    </GameButton>
  );
};
