import React from 'react';
import { useOutletContext } from 'react-router-dom';
import GameButton, { GAME_BUTTON_TYPES } from '../GameButton/GameButton';
import type { OutletContext } from '../../../../types';

const PlayAgainButton: React.FC = (): React.JSX.Element => {
  const { onStartGame } = useOutletContext<OutletContext>();

  return (
    <GameButton
      keyType={GAME_BUTTON_TYPES.PLAY_AGAIN}
      onClick={onStartGame}
    >
      Играть снова
    </GameButton>
  );
};

export default PlayAgainButton;