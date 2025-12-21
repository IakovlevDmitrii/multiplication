import React, { useCallback } from 'react';
import { SettingsPanelTitle } from './SettingsPanelTitle';
import { SettingsPanelTrack } from './SettingsPanelTrack';
import { SettingsPanelLabels } from './SettingsPanelLabels';
import styles from './SettingsPanel.module.scss';

interface SettingsOption<T extends number> {
  value: T;
  label: string;
}

interface SettingsPanelProps<T extends number> {
  title: string;
  options: readonly SettingsOption<T>[];
  currentValue: T;
  onSettingsChange: (value: T) => void;
}

export const SettingsPanel = <T extends number>({
  title,
  options,
  currentValue,
  onSettingsChange,
}: SettingsPanelProps<T>) => {
  const currentIndex = options.findIndex(({ value }) => value === currentValue);
  const position = (currentIndex / (options.length - 1)) * 100;

  const handleOptionClick = useCallback(
    (value: T) => {
      onSettingsChange(value);
    },
    [onSettingsChange]
  );

  return (
    <article className={styles.settingsPanel}>
      <SettingsPanelTitle title={title} label={options[currentIndex]?.label} />

      <SettingsPanelTrack
        options={options}
        currentIndex={currentIndex}
        position={position}
        handleOptionClick={handleOptionClick}
      />

      <SettingsPanelLabels
        options={options}
        currentIndex={currentIndex}
        handleOptionClick={handleOptionClick}
      />
    </article>
  );
};
