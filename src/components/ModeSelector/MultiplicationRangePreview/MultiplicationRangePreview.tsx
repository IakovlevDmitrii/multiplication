import React from 'react';
import QuestionsPreview from '../../QuestionsPreview/QuestionsPreview';
import { GAME_MODE_VARIANTS } from '../../../constants';
import type { GameMode } from '../../../types';

interface MultiplicationRangePreviewProps {
  mode: GameMode;
  singleNumber?: number;
  minMultiplier?: number;
  maxMultiplier?: number;
  minNumber?: number;
  maxNumber?: number;
}

const MultiplicationRangePreview: React.FC<MultiplicationRangePreviewProps> = ({
  mode,
  singleNumber,
  minMultiplier,
  maxMultiplier,
  minNumber,
  maxNumber,
}): React.JSX.Element => {
  const { SINGLE_NUMBER, TWO_NUMBERS } = GAME_MODE_VARIANTS;
  const getPreviewText = () => {
    if (mode === SINGLE_NUMBER && singleNumber && minMultiplier && maxMultiplier) {
      return `Будут вопросы: ${singleNumber} × ${minMultiplier} ... ${singleNumber} × ${maxMultiplier}`;
    }

    if (mode === TWO_NUMBERS && minNumber && maxNumber) {
      return `Будут вопросы от ${minNumber}×${minNumber} до ${maxNumber}×${maxNumber}`;
    }

    return 'Настройте параметры';
  };

  return <QuestionsPreview>{getPreviewText()}</QuestionsPreview>;
};

export default MultiplicationRangePreview;
