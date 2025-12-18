import React, { useState, useCallback, useMemo } from 'react';
import { ModeOption } from '../ModeOption';
import { NumberGroup } from '../groups/NumberGroup';
import { RangeGroup } from '../groups/RangeGroup';
import { RangePreview } from '../groups/RangePreview';
import { useGameConfig } from '../../../../hooks';
import { GAME_MODE } from '../../../../constants';
import type { GameMode } from '../../../../types';

interface SingleNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
  isTransitioning?: boolean;
}

export const SingleNumberSelector = ({
  selectedMode,
  setSelectedMode,
  isTransitioning = false,
}: SingleNumberSelectorProps) => {
  const { updateConfig } = useGameConfig();
  const { MODE, INITIAL_SINGLE_NUMBER, INITIAL_MIN_MULTIPLIER, INITIAL_MAX_MULTIPLIER } = useMemo(
    () => GAME_MODE.SINGLE_NUMBER,
    []
  );
  const [singleNumber, setSingleNumber] = useState<number>(INITIAL_SINGLE_NUMBER);
  const [minMultiplier, setMinMultiplier] = useState<number>(INITIAL_MIN_MULTIPLIER);
  const [maxMultiplier, setMaxMultiplier] = useState<number>(INITIAL_MAX_MULTIPLIER);
  const isSelected = selectedMode === MODE;

  const handleNumberChange = useCallback(
    (value: number) => {
      setSingleNumber(value);
      if (isSelected) {
        updateConfig({
          mode: MODE,
          currentNumber: value,
          minMultiplier,
          maxMultiplier,
        });
      }
    },
    [MODE, updateConfig, minMultiplier, maxMultiplier, isSelected]
  );

  const handleMultiplierChange = useCallback(
    (type: 'min' | 'max', value: number) => {
      const updates =
        type === 'min'
          ? { minMultiplier: value, maxMultiplier: Math.max(value, maxMultiplier) }
          : { minMultiplier: Math.min(minMultiplier, value), maxMultiplier: value };

      setMinMultiplier(updates.minMultiplier);
      setMaxMultiplier(updates.maxMultiplier);

      if (isSelected) {
        updateConfig({
          mode: MODE,
          currentNumber: singleNumber,
          ...updates,
        });
      }
    },
    [MODE, updateConfig, singleNumber, minMultiplier, maxMultiplier, isSelected]
  );

  const handleSelectMode = useCallback(() => {
    if (!isSelected && !isTransitioning) {
      updateConfig({
        mode: MODE,
        currentNumber: singleNumber,
        minMultiplier,
        maxMultiplier,
      });
      setSelectedMode(MODE);
    }
  }, [
    MODE,
    isTransitioning,
    updateConfig,
    setSelectedMode,
    isSelected,
    singleNumber,
    minMultiplier,
    maxMultiplier,
  ]);

  return (
    <ModeOption
      isSelected={isSelected}
      onSelect={handleSelectMode}
      label=""
      isTransitioning={isTransitioning}
    >
      <NumberGroup selectedNumber={singleNumber} setSelectedNumber={handleNumberChange} />
      <RangeGroup
        label="Диапазон второго множителя"
        min={minMultiplier}
        max={maxMultiplier}
        setMin={(min: number) => handleMultiplierChange('min', min)}
        setMax={(max: number) => handleMultiplierChange('max', max)}
      />
      <RangePreview
        mode={MODE}
        singleNumber={singleNumber}
        minMultiplier={minMultiplier}
        maxMultiplier={maxMultiplier}
      />
    </ModeOption>
  );
};
