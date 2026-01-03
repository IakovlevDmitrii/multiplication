import React, { useState, useCallback, useEffect } from 'react';
import { ModeOption } from '../ModeOption';
import { NumberGroup } from '../groups/NumberGroup';
import { RangeGroup } from '../groups/RangeGroup';
import { RangePreview } from '../groups/RangePreview';
import { OptionIndicatorIcon } from '../../../../icons';
import { GAME_MODE } from '../../../../constants';
import type { GameMode, GameConfig } from '../../../../types';

interface SingleNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
  isTransitioning?: boolean;
  onSettingsChange?: (currentNumber: number, minMultiplier: number, maxMultiplier: number) => void;
  currentConfig: GameConfig;
}

export const SingleNumberSelector = ({
  selectedMode,
  setSelectedMode,
  isTransitioning = false,
  onSettingsChange,
  currentConfig,
}: SingleNumberSelectorProps) => {
  const MODE = GAME_MODE.SINGLE.MODE;
  const INITIAL_SINGLE_NUMBER = GAME_MODE.SINGLE.INITIAL_SINGLE_NUMBER as number;
  const INITIAL_MIN_MULTIPLIER = GAME_MODE.SINGLE.INITIAL_MIN_MULTIPLIER as number;
  const INITIAL_MAX_MULTIPLIER = GAME_MODE.SINGLE.INITIAL_MAX_MULTIPLIER as number;

  const isActiveMode = currentConfig.mode === MODE;

  const [currentNumber, setCurrentNumber] = useState(
    isActiveMode && 'currentNumber' in currentConfig
      ? currentConfig.currentNumber
      : INITIAL_SINGLE_NUMBER
  );

  const [minMultiplier, setMinMultiplier] = useState(
    isActiveMode && 'minMultiplier' in currentConfig
      ? currentConfig.minMultiplier
      : INITIAL_MIN_MULTIPLIER
  );

  const [maxMultiplier, setMaxMultiplier] = useState(
    isActiveMode && 'maxMultiplier' in currentConfig
      ? currentConfig.maxMultiplier
      : INITIAL_MAX_MULTIPLIER
  );

  const isSelected = selectedMode === MODE;

  // Сбрасываем при открытии вкладки (но только если не активный режим)
  useEffect(() => {
    if (isSelected) {
      if (isActiveMode) {
        // Если это активный режим - загружаем текущие настройки
        if ('currentNumber' in currentConfig) {
          setCurrentNumber(currentConfig.currentNumber);
        }
        if ('minMultiplier' in currentConfig) {
          setMinMultiplier(currentConfig.minMultiplier);
        }
        if ('maxMultiplier' in currentConfig) {
          setMaxMultiplier(currentConfig.maxMultiplier);
        }
      } else {
        // Если это не активный режим - показываем начальные значения
        setCurrentNumber(INITIAL_SINGLE_NUMBER);
        setMinMultiplier(INITIAL_MIN_MULTIPLIER);
        setMaxMultiplier(INITIAL_MAX_MULTIPLIER);
      }
    }
  }, [
    isSelected,
    isActiveMode,
    currentConfig,
    INITIAL_SINGLE_NUMBER,
    INITIAL_MIN_MULTIPLIER,
    INITIAL_MAX_MULTIPLIER,
  ]);

  const handleNumberChange = useCallback(
    (value: number) => {
      setCurrentNumber(value);
      onSettingsChange?.(value, minMultiplier, maxMultiplier);
    },
    [onSettingsChange, minMultiplier, maxMultiplier]
  );

  const handleMultiplierChange = useCallback(
    (type: 'min' | 'max', value: number) => {
      let newMin: number;
      let newMax: number;

      if (type === 'min') {
        newMin = value;
        newMax = Math.max(value, maxMultiplier);
        setMinMultiplier(newMin);
        setMaxMultiplier(newMax);
      } else {
        newMax = value;
        newMin = Math.min(minMultiplier, value);
        setMaxMultiplier(newMax);
        setMinMultiplier(newMin);
      }

      onSettingsChange?.(currentNumber, newMin, newMax);
    },
    [onSettingsChange, currentNumber, minMultiplier, maxMultiplier]
  );

  const handleSelectMode = useCallback(() => {
    if (!isSelected && !isTransitioning) {
      setSelectedMode(MODE);
    }
  }, [MODE, isSelected, isTransitioning, setSelectedMode]);

  return (
    <ModeOption
      isSelected={isSelected}
      onSelect={handleSelectMode}
      icon={<OptionIndicatorIcon />}
      label="Один множитель"
      isTransitioning={isTransitioning}
    >
      <NumberGroup selectedNumber={currentNumber} setSelectedNumber={handleNumberChange} />
      <RangeGroup
        label="Диапазон второго множителя"
        min={minMultiplier}
        max={maxMultiplier}
        setMin={(min: number) => handleMultiplierChange('min', min)}
        setMax={(max: number) => handleMultiplierChange('max', max)}
      />
      <RangePreview
        mode={MODE}
        singleNumber={currentNumber}
        minMultiplier={minMultiplier}
        maxMultiplier={maxMultiplier}
      />
    </ModeOption>
  );
};
