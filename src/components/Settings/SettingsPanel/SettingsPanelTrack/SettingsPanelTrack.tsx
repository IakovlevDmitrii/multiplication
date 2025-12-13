import React from 'react';
import classNames from 'classnames';
import styles from './SettingsPanelTrack.module.scss';

interface SettingsOption<T extends number> {
  value: T;
  label: string;
}

interface SettingsPanelTrackProps<T extends number> {
  options: readonly SettingsOption<T>[];
  currentIndex: number;
  position: number;
  handleOptionClick: (value: T) => void;
}

export const SettingsPanelTrack = <T extends number>({
  options,
  currentIndex,
  position,
  handleOptionClick,
}: SettingsPanelTrackProps<T>) => {
  return (
    <div className={styles.trackContainer}>
      <div className={styles.track}>
        <div className={styles.filledTrack} style={{ width: `${position}%` }} />
        <div className={styles.trackBackground} />

        {options.map(({ value }: SettingsOption<T>, index: number) => {
          const optionPosition = (index / (options.length - 1)) * 100;
          const isSelected = index === currentIndex;
          const isPast = index < currentIndex;

          return (
            <button
              key={value}
              type="button"
              className={classNames(styles.sliderPoint, {
                [styles.sliderPointActive]: isSelected,
                [styles.sliderPointSelected]: isPast,
                [styles.sliderPointPast]: isPast && !isSelected,
              })}
              style={{ left: `${optionPosition}%` }}
              onClick={() => handleOptionClick(value)}
              aria-label={`Установить ${options[index]?.label}`}
              aria-pressed={isSelected}
            >
              {isSelected && <span className={styles.pointGlow} />}
              <span className={styles.pointInner} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
