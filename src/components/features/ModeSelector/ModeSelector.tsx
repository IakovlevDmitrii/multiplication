import React, { useState, useEffect } from 'react';
import { SingleNumberSelector, TwoNumberSelector } from './selectors';
import type { GameMode } from '../../../types';
import { GAME_MODE } from '../../../constants';
import { useGameConfig } from '../../../hooks';
import styles from './ModeSelector.module.scss';

export const ModeSelector = () => {
  const { currentConfig } = useGameConfig();

  // Инициализируем выбранную панель из текущего конфига
  const [selectedMode, setSelectedMode] = useState<GameMode>(currentConfig.mode);
  const [transitioning, setTransitioning] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Состояние для хранения несохраненных настроек
  const [unsavedSettings, setUnsavedSettings] = useState<{
    mode: GameMode;
    data: any;
  } | null>(null);

  const { updateConfig } = useGameConfig();

  const handleModeChange = (mode: GameMode) => {
    if (mode !== selectedMode && !transitioning) {
      // БЕЗ CONFIRM - просто сбрасываем изменения
      if (hasUnsavedChanges) {
        setHasUnsavedChanges(false);
        setUnsavedSettings(null);
      }

      setTransitioning(true);
      setSelectedMode(mode);
    }
  };

  // Функция для сохранения изменений из SingleNumberSelector
  const handleSingleSettingsChange = (
    currentNumber: number,
    minMultiplier: number,
    maxMultiplier: number
  ) => {
    setHasUnsavedChanges(true);
    setUnsavedSettings({
      mode: GAME_MODE.SINGLE.MODE,
      data: {
        currentNumber,
        minMultiplier,
        maxMultiplier,
      },
    });
  };

  const handleTwoSettingsChange = (minNumber: number, maxNumber: number) => {
    setHasUnsavedChanges(true);
    setUnsavedSettings({
      mode: GAME_MODE.MULTI.MODE,
      data: { minNumber, maxNumber },
    });
  };

  const handleSave = () => {
    if (unsavedSettings) {
      updateConfig({
        mode: unsavedSettings.mode,
        ...unsavedSettings.data,
      });
      setHasUnsavedChanges(false);
      setUnsavedSettings(null);
    }
  };

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  return (
    <div className={styles.container}>
      <div className={`${styles.modeOptions} ${transitioning ? styles.transitioning : ''}`}>
        <SingleNumberSelector
          selectedMode={selectedMode}
          setSelectedMode={handleModeChange}
          isTransitioning={transitioning && selectedMode !== GAME_MODE.SINGLE.MODE}
          onSettingsChange={handleSingleSettingsChange}
          currentConfig={currentConfig}
        />
        <TwoNumberSelector
          selectedMode={selectedMode}
          setSelectedMode={handleModeChange}
          isTransitioning={transitioning && selectedMode !== GAME_MODE.MULTI.MODE}
          onSettingsChange={handleTwoSettingsChange}
          currentConfig={currentConfig}
        />
      </div>

      {hasUnsavedChanges && (
        <div className={styles.saveSection}>
          <button onClick={handleSave} className={styles.saveButton}>
            Сохранить настройки
          </button>
        </div>
      )}
    </div>
  );
};
