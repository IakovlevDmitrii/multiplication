import React from 'react';
import { GAME_MODE } from '../../../../../constants';
import type { GameMode } from '../../../../../types';
import styles from './RangePreview.module.scss';

interface MultiplicationRangePreviewProps {
  mode: GameMode;
  singleNumber?: number;
  minMultiplier?: number;
  maxMultiplier?: number;
  minNumber?: number;
  maxNumber?: number;
}

export const RangePreview = ({
  mode,
  singleNumber,
  minMultiplier,
  maxMultiplier,
  minNumber,
  maxNumber,
}: MultiplicationRangePreviewProps) => {
  const { SINGLE, MULTI } = GAME_MODE;
  const getPreviewText = () => {
    if (mode === SINGLE.MODE && singleNumber && minMultiplier && maxMultiplier) {
      return `Будут вопросы: ${singleNumber} × ${minMultiplier} ... ${singleNumber} × ${maxMultiplier}`;
    }

    if (mode === MULTI.MODE && minNumber && maxNumber) {
      return `Будут вопросы от ${minNumber}×${minNumber} до ${maxNumber}×${maxNumber}`;
    }
  };

  return (
    <div className={styles.preview}>
      <span className={styles.previewText}>{getPreviewText()}</span>
    </div>
  );
};
