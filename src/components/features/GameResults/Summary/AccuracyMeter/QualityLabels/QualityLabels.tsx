import React from 'react';
import styles from './QualityLabels.module.scss';

export const QualityLabels = () => {
  return (
    <div className={styles.qualityLabels}>
      <div className={`${styles.qualityLabel} ${styles.qualityPoor}`}>Низкая</div>
      <div className={`${styles.qualityLabel} ${styles.qualityAverage}`}>Средняя</div>
      <div className={`${styles.qualityLabel} ${styles.qualityGood}`}>Хорошая</div>
      <div className={`${styles.qualityLabel} ${styles.qualityExcellent}`}>Отличная</div>
    </div>
  );
};
