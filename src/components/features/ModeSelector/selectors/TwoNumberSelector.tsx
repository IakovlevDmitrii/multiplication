import React, { useState, useCallback, useEffect } from 'react';
import { ModeOption } from '../ModeOption';
import { RangeGroup } from '../groups/RangeGroup';
import { RangePreview } from '../groups/RangePreview';
import { OptionIndicatorIcon } from '../../../../icons';
import { GAME_MODE } from '../../../../constants';
import type { GameMode, GameConfig } from '../../../../types';

interface TwoNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
  isTransitioning?: boolean;
  onSettingsChange?: (minNumber: number, maxNumber: number) => void;
  currentConfig: GameConfig;
}

export const TwoNumberSelector = ({
  selectedMode,
  setSelectedMode,
  isTransitioning = false,
  onSettingsChange,
  currentConfig,
}: TwoNumberSelectorProps) => {
  const MODE = GAME_MODE.MULTI.MODE;
  const INITIAL_MIN_NUMBER = GAME_MODE.MULTI.INITIAL_MIN_NUMBER as number;
  const INITIAL_MAX_NUMBER = GAME_MODE.MULTI.INITIAL_MAX_NUMBER as number;

  const isActiveMode = currentConfig.mode === MODE;

  const [minNumber, setMinNumber] = useState(
    isActiveMode && 'minNumber' in currentConfig ? currentConfig.minNumber : INITIAL_MIN_NUMBER
  );

  const [maxNumber, setMaxNumber] = useState(
    isActiveMode && 'maxNumber' in currentConfig ? currentConfig.maxNumber : INITIAL_MAX_NUMBER
  );

  const isSelected = selectedMode === MODE;

  useEffect(() => {
    if (isSelected) {
      if (isActiveMode) {
        if ('minNumber' in currentConfig) {
          setMinNumber(currentConfig.minNumber);
        }
        if ('maxNumber' in currentConfig) {
          setMaxNumber(currentConfig.maxNumber);
        }
      } else {
        setMinNumber(INITIAL_MIN_NUMBER);
        setMaxNumber(INITIAL_MAX_NUMBER);
      }
    }
  }, [isSelected, isActiveMode, currentConfig, INITIAL_MIN_NUMBER, INITIAL_MAX_NUMBER]);

  const handleNumberChange = useCallback(
    (type: 'min' | 'max', value: number) => {
      let newMin: number;
      let newMax: number;

      if (type === 'min') {
        newMin = value;
        newMax = Math.max(value, maxNumber);
      } else {
        newMax = value;
        newMin = Math.min(minNumber, value);
      }

      setMinNumber(newMin);
      setMaxNumber(newMax);
      onSettingsChange?.(newMin, newMax);
    },
    [onSettingsChange, minNumber, maxNumber]
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
      icon={
        <>
          <OptionIndicatorIcon />
          <OptionIndicatorIcon />
        </>
      }
      label="Два множителя"
      isTransitioning={isTransitioning}
    >
      <RangeGroup
        label="Диапазон обоих множителей"
        min={minNumber}
        max={maxNumber}
        setMin={(min: number) => handleNumberChange('min', min)}
        setMax={(max: number) => handleNumberChange('max', max)}
      />
      <RangePreview mode={MODE} minNumber={minNumber} maxNumber={maxNumber} />
    </ModeOption>
  );
};
