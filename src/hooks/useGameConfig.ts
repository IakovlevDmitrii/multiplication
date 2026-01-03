import { useCallback, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setGameConfig } from '../store/gameSlice';
import { GAME_MODE } from '../constants';
import type { GameConfig, GameMode, SingleNumberConfig, TwoNumbersConfig } from '../types';

export const useGameConfig = () => {
  const dispatch = useAppDispatch();
  const currentConfig = useAppSelector(state => state.game.gameConfig);

  // Локальное состояние для каждого режима
  const [localConfigs, setLocalConfigs] = useState<{
    [GAME_MODE.MULTI.MODE]: TwoNumbersConfig | null;
    [GAME_MODE.SINGLE.MODE]: SingleNumberConfig | null;
  }>({
    [GAME_MODE.MULTI.MODE]: null,
    [GAME_MODE.SINGLE.MODE]: null,
  });

  // Инициализация при первом рендере
  useEffect(() => {
    if (currentConfig.mode === GAME_MODE.MULTI.MODE && !localConfigs[GAME_MODE.MULTI.MODE]) {
      setLocalConfigs(prev => ({
        ...prev,
        [GAME_MODE.MULTI.MODE]: currentConfig,
      }));
    } else if (
      currentConfig.mode === GAME_MODE.SINGLE.MODE &&
      !localConfigs[GAME_MODE.SINGLE.MODE]
    ) {
      setLocalConfigs(prev => ({
        ...prev,
        [GAME_MODE.SINGLE.MODE]: currentConfig,
      }));
    }
  }, [currentConfig, localConfigs]);

  const updateConfig = useCallback(
    (config: GameConfig) => {
      dispatch(setGameConfig(config));
    },
    [dispatch]
  );

  // Получить конфиг для режима (типобезопасно)
  const getConfigForMode = useCallback(
    (mode: GameMode): GameConfig => {
      // Если есть сохраненный локальный конфиг
      if (mode === GAME_MODE.MULTI.MODE && localConfigs[GAME_MODE.MULTI.MODE]) {
        return localConfigs[GAME_MODE.MULTI.MODE]!;
      }
      if (mode === GAME_MODE.SINGLE.MODE && localConfigs[GAME_MODE.SINGLE.MODE]) {
        return localConfigs[GAME_MODE.SINGLE.MODE]!;
      }

      // Если это текущий активный конфиг
      if (currentConfig.mode === mode) {
        return currentConfig;
      }

      // Дефолтные значения
      if (mode === GAME_MODE.MULTI.MODE) {
        return {
          mode: GAME_MODE.MULTI.MODE,
          minNumber: GAME_MODE.MULTI.INITIAL_MIN_NUMBER,
          maxNumber: GAME_MODE.MULTI.INITIAL_MAX_NUMBER,
        };
      } else {
        return {
          mode: GAME_MODE.SINGLE.MODE,
          currentNumber: GAME_MODE.SINGLE.INITIAL_SINGLE_NUMBER,
          minMultiplier: GAME_MODE.SINGLE.INITIAL_MIN_MULTIPLIER,
          maxMultiplier: GAME_MODE.SINGLE.INITIAL_MAX_MULTIPLIER,
        };
      }
    },
    [localConfigs, currentConfig]
  );

  // Обновить локальный конфиг (типобезопасно)
  const updateLocalConfig = useCallback(
    (mode: GameMode, updates: Partial<TwoNumbersConfig> | Partial<SingleNumberConfig>) => {
      setLocalConfigs(prev => {
        const current =
          mode === GAME_MODE.MULTI.MODE
            ? prev[GAME_MODE.MULTI.MODE] || (getConfigForMode(mode) as TwoNumbersConfig)
            : prev[GAME_MODE.SINGLE.MODE] || (getConfigForMode(mode) as SingleNumberConfig);

        const newConfig = { ...current, ...updates, mode };

        if (mode === GAME_MODE.MULTI.MODE) {
          return { ...prev, [GAME_MODE.MULTI.MODE]: newConfig as TwoNumbersConfig };
        } else {
          return { ...prev, [GAME_MODE.SINGLE.MODE]: newConfig as SingleNumberConfig };
        }
      });
    },
    [getConfigForMode]
  );

  // Применить локальный конфиг
  const applyLocalConfig = useCallback(
    (mode: GameMode) => {
      const configToApply =
        mode === GAME_MODE.MULTI.MODE
          ? localConfigs[GAME_MODE.MULTI.MODE] || getConfigForMode(mode)
          : localConfigs[GAME_MODE.SINGLE.MODE] || getConfigForMode(mode);

      dispatch(setGameConfig(configToApply));
    },
    [localConfigs, getConfigForMode, dispatch]
  );

  // Проверка несохраненных изменений
  const hasUnsavedChanges = useCallback(
    (mode: GameMode): boolean => {
      const localConfig =
        mode === GAME_MODE.MULTI.MODE
          ? localConfigs[GAME_MODE.MULTI.MODE]
          : localConfigs[GAME_MODE.SINGLE.MODE];

      if (!localConfig) return false;

      const savedConfig = currentConfig.mode === mode ? currentConfig : getConfigForMode(mode);

      if (mode === GAME_MODE.MULTI.MODE) {
        const saved = savedConfig as TwoNumbersConfig;
        const local = localConfig as TwoNumbersConfig;
        return local.minNumber !== saved.minNumber || local.maxNumber !== saved.maxNumber;
      } else {
        const saved = savedConfig as SingleNumberConfig;
        const local = localConfig as SingleNumberConfig;
        return (
          local.currentNumber !== saved.currentNumber ||
          local.minMultiplier !== saved.minMultiplier ||
          local.maxMultiplier !== saved.maxMultiplier
        );
      }
    },
    [localConfigs, currentConfig, getConfigForMode]
  );

  return {
    currentConfig,
    updateConfig,
    getConfigForMode,
    updateLocalConfig,
    applyLocalConfig,
    hasUnsavedChanges,
    // isModeActive: (mode: GameMode) => currentConfig.mode === mode,
  };
};
