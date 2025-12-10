import React, { useState, useCallback, useMemo } from 'react';
import { ModeOption } from '../ModeOption/ModeOption';
import { RangeGroup } from '../RangeGroup/RangeGroup';
import { MultiplicationRangePreview } from '../MultiplicationRangePreview/MultiplicationRangePreview';
import { useGameConfig } from '../../../hooks';
import { GAME_MODE, MULTIPLIERS_RANGE } from '../../../constants';
import type { GameMode } from '../../../types';

interface TwoNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
}

export const TwoNumberSelector = ({ selectedMode, setSelectedMode }: TwoNumberSelectorProps) => {
  const { updateConfig } = useGameConfig();
  const { MODE, INITIAL_MIN_NUMBER, INITIAL_MAX_NUMBER } = useMemo(() => GAME_MODE.TWO_NUMBERS, []);
  const [minNumber, setMinNumber] = useState<number>(INITIAL_MIN_NUMBER);
  const [maxNumber, setMaxNumber] = useState<number>(INITIAL_MAX_NUMBER);
  const isSelected = selectedMode === MODE;

  const handleNumberChange = useCallback(
    (type: 'min' | 'max', value: number) => {
      const updates =
        type === 'min'
          ? { minNumber: value, maxNumber: Math.max(value, maxNumber) }
          : { minNumber: Math.min(minNumber, value), maxNumber: value };

      setMinNumber(updates.minNumber);
      setMaxNumber(updates.maxNumber);

      if (isSelected) {
        updateConfig({
          mode: MODE,
          ...updates,
        });
      }
    },
    [MODE, updateConfig, minNumber, maxNumber, isSelected]
  );

  const handleSelectMode = useCallback(() => {
    if (!isSelected) {
      updateConfig({
        mode: MODE,
        minNumber,
        maxNumber,
      });
      setSelectedMode(MODE);
    }
  }, [MODE, updateConfig, setSelectedMode, isSelected, minNumber, maxNumber]);

  return (
    <ModeOption isSelected={isSelected} onSelect={handleSelectMode} label="Диапазон чисел">
      <RangeGroup
        label="Диапазон обоих множителей:"
        numbers={MULTIPLIERS_RANGE}
        min={minNumber}
        max={maxNumber}
        setMin={(min: number) => handleNumberChange('min', min)}
        setMax={(max: number) => handleNumberChange('max', max)}
      />
      <MultiplicationRangePreview mode={MODE} minNumber={minNumber} maxNumber={maxNumber} />
    </ModeOption>
  );
};
