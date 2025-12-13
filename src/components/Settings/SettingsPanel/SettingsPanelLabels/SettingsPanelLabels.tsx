import React from 'react';
import classNames from 'classnames';
import styles from './SettingsPanelLabels.module.scss';

interface SettingsOption<T extends number> {
  value: T;
  label: string;
}

interface SettingsPanelLabelsProps<T extends number> {
  options: readonly SettingsOption<T>[];
  currentIndex: number;
  handleOptionClick: (value: T) => void;
}

export const SettingsPanelLabels = <T extends number>({
  options,
  currentIndex,
  handleOptionClick,
}: SettingsPanelLabelsProps<T>) => {
  return (
    <div className={styles.labels}>
      {options.map(({ value, label }, index) => {
        const isSelected = index === currentIndex;
        const isPast = index < currentIndex;

        return (
          <button
            key={value}
            type="button"
            className={classNames(styles.labelButton, {
              [styles.labelSelected]: isSelected,
              [styles.labelPast]: isPast,
            })}
            onClick={() => handleOptionClick(value)}
            aria-label={`Выбрать ${label}`}
          >
            <span className={styles.labelText}>{label}</span>
            {isSelected && <span className={styles.activeIndicator} />}
          </button>
        );
      })}
    </div>
  );
};
