import React from 'react';
import { SmallCard } from '../../SmallCard';
import styles from './SettingsPanelTitle.module.scss';

interface SettingsPanelHeaderProps {
  title: string;
  label: string;
}

export const SettingsPanelTitle = ({ title, label }: SettingsPanelHeaderProps) => {
  return (
    <div className={styles.title}>
      <h3 className={styles.titleText}>{title}</h3>
      <SmallCard className={styles.label}>
        <span className={styles.labelText}>{label}</span>
      </SmallCard>
    </div>
  );
};
