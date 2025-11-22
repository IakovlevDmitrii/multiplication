import React from 'react';
import classNames from 'classnames';
import styles from './SettingsPanel.module.scss';

interface SettingsPanelProps {
  title: string;
  options: number[];
  currentIndex: number;
  position: number;
  currentSettings: number;
  onSettingsChange: (index: number) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  title,
  options,
  currentIndex,
  position,
  currentSettings,
  onSettingsChange,
}): React.JSX.Element => {
  return (
    <div className={styles.settingsPanel}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.sliderContainer}>
        <div className={styles.track}>
          <div className={styles.filledTrack} style={{ width: `${position}%` }} />
          {options.map((option: number, index): React.JSX.Element => {
            const optionPosition: number = (index / (options.length - 1)) * 100;
            return (
              <button
                key={option}
                type="button"
                className={classNames(styles.sliderPoint, {
                  [styles.sliderPointActive]: currentSettings === option,
                  [styles.sliderPointSelected]: index < currentIndex,
                })}
                style={{ left: `${optionPosition}%` }}
                onClick={() => onSettingsChange(option)}
              ></button>
            );
          })}
        </div>

        <div className={styles.labels}>
          {options.map(
            (option: number, index): React.JSX.Element => (
              <span
                key={option}
                className={classNames(styles.label, {
                  [styles.labelSelected]: index < currentIndex,
                  [styles.labelActive]: index === currentIndex,
                })}
                onClick={() => onSettingsChange(option)}
              >
                {option === 0 ? 'ထ' : option}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
