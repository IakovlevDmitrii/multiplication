import React from 'react';
import { SummaryCard } from '../../../../ui';
import styles from './AccuracyMeter.module.scss';

interface AccuracyMeterProps {
  accuracy: number;
}

export const AccuracyMeter = ({ accuracy }: AccuracyMeterProps) => {
  const getAccuracyColorClass = (accuracy: number) => {
    if (accuracy >= 90) return styles.accuracyExcellent;
    if (accuracy >= 70) return styles.accuracyGood;
    if (accuracy >= 50) return styles.accuracyAverage;
    return styles.accuracyPoor;
  };

  const accuracyColorClass = getAccuracyColorClass(accuracy);

  return (
    <SummaryCard
      icon="🎯"
      label="Точность"
      value={<span className={`${styles.accuracyValue} ${accuracyColorClass}`}>{accuracy}%</span>}
    >
      <div className={styles.accuracyMeter}>
        <div className={styles.meterTrack}>
          <div
            className={`${styles.meterFill} ${accuracyColorClass}`}
            style={{ width: `${accuracy}%` }}
          />
          <div className={styles.meterMarkers}>
            {[0, 25, 50, 75, 100].map(marker => (
              <div key={marker} className={styles.marker} style={{ left: `${marker}%` }}>
                <div className={styles.markerLine} />
                <div className={styles.markerLabel}>{marker}%</div>
              </div>
            ))}
          </div>

          <div className={styles.qualityLabels}>
            <div className={`${styles.qualityLabel} ${styles.qualityPoor}`}>Низкая</div>
            <div className={`${styles.qualityLabel} ${styles.qualityAverage}`}>Средняя</div>
            <div className={`${styles.qualityLabel} ${styles.qualityGood}`}>Хорошая</div>
            <div className={`${styles.qualityLabel} ${styles.qualityExcellent}`}>Отличная</div>
          </div>
        </div>
      </div>
    </SummaryCard>
  );
};
