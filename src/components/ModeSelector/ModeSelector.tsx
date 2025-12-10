import React, { useState } from 'react';
import { TwoNumberSelector } from './TwoNumberSelector/TwoNumberSelector';
import { SingleNumberSelector } from './SingleNumberSelector/SingleNumberSelector';
import type { GameMode } from '../../types';
import { GAME_MODE } from '../../constants';
import styles from './ModeSelector.module.scss';

export const ModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState<GameMode>(GAME_MODE.TWO_NUMBERS.MODE);
  return (
    <div className={styles.modeOptions}>
      <TwoNumberSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
      <SingleNumberSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
    </div>
  );
};
