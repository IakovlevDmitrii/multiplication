import React from 'react';
import styles from './SettingsPanelHeader.module.scss';

interface SettingsPanelHeaderProps {
  title: string;
  label: string;
}

export const SettingsPanelHeader = ({ title, label }: SettingsPanelHeaderProps) => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.valueIndicator}>
        <span className={styles.valueLabel}>{label}</span>
      </div>
    </header>
  );
};
