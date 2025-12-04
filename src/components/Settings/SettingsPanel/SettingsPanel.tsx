import React, { useCallback } from 'react';
import classNames from 'classnames';
import type { SettingValue } from '../../../types';
import styles from './SettingsPanel.module.scss';

interface SettingsOption {
  value: SettingValue;
  label: string;
}

interface SettingsPanelProps {
  title: string;
  options: SettingsOption[];
  currentValue: number;
  onSettingsChange: (value: SettingValue) => void;
}

const SettingsPanel = ({ title, options, currentValue, onSettingsChange }: SettingsPanelProps) => {
  const currentIndex = options.findIndex(({ value }) => value === currentValue);
  const position = (currentIndex / (options.length - 1)) * 100;
  const handleOptionClick = useCallback(
    (value: SettingValue) => {
      onSettingsChange(value);
    },
    [onSettingsChange]
  );

  return (
    <div className={styles.settingsPanel}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.track}>
        <div className={styles.filledTrack} style={{ width: `${position}%` }} />
        {options.map(({ value }, index) => {
          const optionPosition = (index / (options.length - 1)) * 100;
          return (
            <button
              key={value}
              type="button"
              className={classNames(styles.sliderPoint, {
                [styles.sliderPointActive]: currentValue === value,
                [styles.sliderPointSelected]: index < currentIndex,
              })}
              style={{ left: `${optionPosition}%` }}
              onClick={() => handleOptionClick(value)}
            ></button>
          );
        })}
      </div>

      <div className={styles.labels}>
        {options.map(({ value, label }, index) => (
          <span
            key={value}
            className={classNames(styles.label, {
              [styles.labelSelected]: index < currentIndex,
              [styles.labelActive]: index === currentIndex,
            })}
            onClick={() => handleOptionClick(value)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SettingsPanel;
