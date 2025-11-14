import React from 'react';
import GameButton, { GAME_BUTTON_TYPES } from '../GameButton/GameButton';
import { useAppSelector, useAppDispatch } from '../../../../utils/hooks/redux';
import { checkAnswer } from '../../../../store/gameSlice';

const AnswerButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleKeyPress = () => dispatch(checkAnswer());
  const { userAnswer } = useAppSelector(state => state.game);

  return (
    <GameButton
      keyType={GAME_BUTTON_TYPES.ANSWER}
      onClick={handleKeyPress}
      disabled={!userAnswer}
    >
      Ответить
    </GameButton>
  );
};

export default AnswerButton;