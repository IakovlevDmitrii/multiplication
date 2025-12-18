import React, { useState, useEffect } from 'react';
import { TwoNumberSelector, SingleNumberSelector } from './selectors';
import type { GameMode } from '../../../types';
import { GAME_MODE } from '../../../constants';
import styles from './ModeSelector.module.scss';

export const ModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState<GameMode>(GAME_MODE.TWO_NUMBERS.MODE);
  const [transitioning, setTransitioning] = useState(false);
  const [previousMode, setPreviousMode] = useState<GameMode | null>(null);

  const handleModeChange = (mode: GameMode) => {
    if (mode !== selectedMode && !transitioning) {
      setTransitioning(true);
      setPreviousMode(selectedMode);
      setSelectedMode(mode);
    }
  };

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false);
        setPreviousMode(null);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  return (
    <div className={`${styles.modeOptions} ${transitioning ? styles.transitioning : ''}`}>
      <TwoNumberSelector
        selectedMode={selectedMode}
        setSelectedMode={handleModeChange}
        isTransitioning={transitioning && previousMode === GAME_MODE.TWO_NUMBERS.MODE}
      />
      <SingleNumberSelector
        selectedMode={selectedMode}
        setSelectedMode={handleModeChange}
        isTransitioning={transitioning && previousMode === GAME_MODE.SINGLE_NUMBER.MODE}
      />
    </div>
  );
};
