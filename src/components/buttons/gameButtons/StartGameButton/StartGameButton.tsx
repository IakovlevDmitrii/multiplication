import React from 'react';
import { useOutletContext } from 'react-router-dom';
import GameButton, { GAME_BUTTON_VARIANTS } from '../GameButton';
import type { OutletContext } from '../../../../types/app';

const StartGameButton: React.FC = (): React.JSX.Element => {
  const { onStartGame } = useOutletContext<OutletContext>();

  return (
    <GameButton keyType={GAME_BUTTON_VARIANTS.START} onClick={onStartGame}>
      Начать игру
    </GameButton>
  );
};

export default StartGameButton;
