import React, { useState, useCallback } from 'react';
import ModeOption from '../ModeOption/ModeOption';
import NumberGroup from '../NumberGroup/NumberGroup';
import RangeGroup from '../RangeGroup/RangeGroup';
import MultiplicationRangePreview from '../MultiplicationRangePreview/MultiplicationRangePreview';
import { useGameConfig } from '../../../hooks';
import { GAME_MODE_VARIANTS, SINGLE_NUMBER_MODE, listOfMultipliers } from '../../../constants';
import type { GameMode } from '../../../types';

interface SingleNumberSelectorProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
}

const { SINGLE_NUMBER } = GAME_MODE_VARIANTS;

const SingleNumberSelector: React.FC<SingleNumberSelectorProps> = ({
  selectedMode,
  setSelectedMode,
}): React.JSX.Element => {
  const { updateConfig } = useGameConfig();
  const { INITIAL_NUMBER, INITIAL_MIN, INITIAL_MAX } = SINGLE_NUMBER_MODE;
  const [singleNumber, setSingleNumber] = useState(INITIAL_NUMBER);
  const [minMultiplier, setMinMultiplier] = useState(INITIAL_MIN);
  const [maxMultiplier, setMaxMultiplier] = useState(INITIAL_MAX);
  const isSelected = selectedMode === SINGLE_NUMBER;

  const handleNumberChange = useCallback(
    (value: number) => {
      setSingleNumber(value);
      if (isSelected) {
        updateConfig({
          mode: SINGLE_NUMBER,
          currentNumber: value,
          minMultiplier,
          maxMultiplier,
        });
      }
    },
    [updateConfig, minMultiplier, maxMultiplier, isSelected]
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
          mode: SINGLE_NUMBER,
          currentNumber: singleNumber,
          ...updates,
        });
      }
    },
    [updateConfig, singleNumber, minMultiplier, maxMultiplier, isSelected]
  );

  const handleSelectMode = useCallback(() => {
    if (!isSelected) {
      updateConfig({
        mode: SINGLE_NUMBER,
        currentNumber: singleNumber,
        minMultiplier,
        maxMultiplier,
      });
      setSelectedMode(SINGLE_NUMBER);
    }
  }, [updateConfig, setSelectedMode, isSelected, singleNumber, minMultiplier, maxMultiplier]);

  return (
    <ModeOption isSelected={isSelected} onSelect={handleSelectMode} label="Таблица одного числа">
      <NumberGroup
        label="Число для тренировки"
        numbers={listOfMultipliers}
        selectedNumber={singleNumber}
        setSelectedNumber={handleNumberChange}
      />
      <RangeGroup
        label="Диапазон второго множителя"
        numbers={listOfMultipliers}
        min={minMultiplier}
        max={maxMultiplier}
        setMin={(min: number) => handleMultiplierChange('min', min)}
        setMax={(max: number) => handleMultiplierChange('max', max)}
      />
      <MultiplicationRangePreview
        mode={SINGLE_NUMBER}
        singleNumber={singleNumber}
        minMultiplier={minMultiplier}
        maxMultiplier={maxMultiplier}
      />
    </ModeOption>
  );
};

export default SingleNumberSelector;
