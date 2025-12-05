import React from 'react';
import QuestionsPreview from '../../QuestionsPreview/QuestionsPreview';
import { GAME_MODE } from '../../../constants';
import type { GameMode } from '../../../types';

interface MultiplicationRangePreviewProps {
  mode: GameMode;
  singleNumber?: number;
  minMultiplier?: number;
  maxMultiplier?: number;
  minNumber?: number;
  maxNumber?: number;
}

const MultiplicationRangePreview = ({
  mode,
  singleNumber,
  minMultiplier,
  maxMultiplier,
  minNumber,
  maxNumber,
}: MultiplicationRangePreviewProps) => {
  const { SINGLE_NUMBER, TWO_NUMBERS } = GAME_MODE;
  const getPreviewText = () => {
    if (mode === SINGLE_NUMBER.MODE && singleNumber && minMultiplier && maxMultiplier) {
      return `Будут вопросы: ${singleNumber} × ${minMultiplier} ... ${singleNumber} × ${maxMultiplier}`;
    }

    if (mode === TWO_NUMBERS.MODE && minNumber && maxNumber) {
      return `Будут вопросы от ${minNumber}×${minNumber} до ${maxNumber}×${maxNumber}`;
    }

    return 'Настройте параметры';
  };

  return <QuestionsPreview>{getPreviewText()}</QuestionsPreview>;
};

export default MultiplicationRangePreview;
