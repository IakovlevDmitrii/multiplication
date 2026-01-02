import React from 'react';
import styles from './SummaryCard.module.scss';

interface SummaryCardProps {
  icon: string | React.ReactNode;
  label: string;
  value: React.ReactNode;
  children: React.ReactNode;
}

export const SummaryCard = ({ icon, label, value, children }: SummaryCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.content}>
          <div className={styles.label}>{label}</div>
          <div className={styles.value}>{value}</div>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </article>
  );
};
