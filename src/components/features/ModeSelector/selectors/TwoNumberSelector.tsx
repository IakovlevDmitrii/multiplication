import React, { useState, useCallback, useMemo } from 'react';
import { ModeOption } from '../ModeOption';
import { RangeGroup } from '../groups/RangeGroup';
import { RangePreview } from '../groups/RangePreview';
import { useGameConfig } from '../../../../hooks';
import { GAME_MODE } from '../../../../constants';
import type { GameMode } from '../../../../types';

interface TwoNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
  isTransitioning?: boolean;
}

export const TwoNumberSelector = ({
  selectedMode,
  setSelectedMode,
  isTransitioning = false,
}: TwoNumberSelectorProps) => {
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
    if (!isSelected && !isTransitioning) {
      updateConfig({
        mode: MODE,
        minNumber,
        maxNumber,
      });
      setSelectedMode(MODE);
    }
  }, [MODE, updateConfig, setSelectedMode, isSelected, minNumber, maxNumber, isTransitioning]);

  return (
    <ModeOption
      isSelected={isSelected}
      onSelect={handleSelectMode}
      label=""
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
