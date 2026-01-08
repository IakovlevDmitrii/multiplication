import React from 'react';
import { SmallCard } from '../../../../../ui';
import styles from './HeaderStatItem.module.scss';

interface HeaderStatItemProps {
  icon: React.ReactNode;
  value: string | number;
}

export const HeaderStatItem = ({ icon, value }: HeaderStatItemProps) => {
  return (
    <SmallCard className={styles.statItem}>
      <div className={styles.statIcon}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <span className={styles.statNumber}>{value}</span>
    </SmallCard>
  );
};
