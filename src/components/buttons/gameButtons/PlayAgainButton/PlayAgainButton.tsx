import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { GameButton, GAME_BUTTON_VARIANTS } from '../GameButton';
import type { OutletContext } from '../../../../types';

export const PlayAgainButton = () => {
  const { onStartGame } = useOutletContext<OutletContext>();
  return (
    <GameButton keyType={GAME_BUTTON_VARIANTS.PLAY_AGAIN} onClick={onStartGame}>
      Повторить
    </GameButton>
  );
};
