import React, { useState, useCallback } from 'react';
import ModeOption from '../ModeOption/ModeOption';
import RangeGroup from '../RangeGroup/RangeGroup';
import MultiplicationRangePreview from '../MultiplicationRangePreview/MultiplicationRangePreview';
import { useGameConfig } from '../../../hooks';
import { GAME_MODE_VARIANTS, TWO_NUMBERS_MODE, listOfMultipliers } from '../../../constants';
import type { GameMode } from '../../../types';

interface TwoNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
}

const { TWO_NUMBERS } = GAME_MODE_VARIANTS;

const TwoNumberSelector: React.FC<TwoNumberSelectorProps> = ({
  selectedMode,
  setSelectedMode,
}): React.JSX.Element => {
  const { INITIAL_MIN, INITIAL_MAX } = TWO_NUMBERS_MODE;
  const { updateConfig } = useGameConfig();
  const [minNumber, setMinNumber] = useState(INITIAL_MIN);
  const [maxNumber, setMaxNumber] = useState(INITIAL_MAX);
  const isSelected = selectedMode === TWO_NUMBERS;

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
          mode: TWO_NUMBERS,
          ...updates,
        });
      }
    },
    [updateConfig, minNumber, maxNumber, isSelected]
  );

  const handleSelectMode = useCallback(() => {
    if (!isSelected) {
      updateConfig({
        mode: TWO_NUMBERS,
        minNumber,
        maxNumber,
      });
      setSelectedMode(TWO_NUMBERS);
    }
  }, [updateConfig, setSelectedMode, isSelected, minNumber, maxNumber]);

  return (
    <ModeOption isSelected={isSelected} onSelect={handleSelectMode} label="Диапазон чисел">
      <RangeGroup
        label="Диапазон обоих множителей:"
        numbers={listOfMultipliers}
        min={minNumber}
        max={maxNumber}
        setMin={(min: number) => handleNumberChange('min', min)}
        setMax={(max: number) => handleNumberChange('max', max)}
      />
      <MultiplicationRangePreview mode={TWO_NUMBERS} minNumber={minNumber} maxNumber={maxNumber} />
    </ModeOption>
  );
};

export default TwoNumberSelector;
