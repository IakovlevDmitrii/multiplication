import React from 'react';
import styles from './SettingsPanelTitle.module.scss';

interface SettingsPanelHeaderProps {
  title: string;
  label: string;
}

export const SettingsPanelTitle = ({ title, label }: SettingsPanelHeaderProps) => {
  return (
    <div className={styles.title}>
      <h3 className={styles.titleText}>{title}</h3>
      <div className={styles.valueIndicator}>
        <span className={styles.valueLabel}>{label}</span>
      </div>
    </div>
  );
};
