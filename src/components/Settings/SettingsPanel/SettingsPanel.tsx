import React, { useCallback } from 'react';
import classNames from 'classnames';
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
