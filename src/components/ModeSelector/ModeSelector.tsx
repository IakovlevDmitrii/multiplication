import React, { useState } from 'react';
import TwoNumberSelector from './TwoNumberSelector/TwoNumberSelector';
import SingleNumberSelector from './SingleNumberSelector/SingleNumberSelector';
import type { GameMode } from '../../types';
import { GAME_MODE_VARIANTS } from '../../constants';
import styles from './ModeSelector.module.scss';

const ModeSelector: React.FC = (): React.JSX.Element => {
  const [selectedMode, setSelectedMode] = useState<GameMode>(GAME_MODE_VARIANTS.TWO_NUMBERS);

  return (
    <div className={styles.modeOptions}>
      <TwoNumberSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
      <SingleNumberSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
    </div>
  );
};

export default ModeSelector;
