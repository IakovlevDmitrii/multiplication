import { useCallback } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { setGameConfig } from '../store/gameSlice';
import type { GameConfig } from '../types';

export const useGameConfig = () => {
  const dispatch = useAppDispatch();

  const updateConfig = useCallback(
    (config: GameConfig) => {
      dispatch(setGameConfig(config));
    },
    [dispatch]
  );

  return { updateConfig };
};
