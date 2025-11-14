import React from 'react';
import { useOutletContext } from 'react-router-dom';
import GameButton, { GAME_BUTTON_TYPES } from '../GameButton/GameButton';
import type { OutletContext } from '../../../../types';

const MainMenuButton: React.FC = (): React.JSX.Element => {
  const { onGoToMainMenu } = useOutletContext<OutletContext>();

  return (
    <GameButton
      keyType={GAME_BUTTON_TYPES.HOME}
      onClick={onGoToMainMenu}
    >
      Главное меню
    </GameButton>
  );
};

export default MainMenuButton;