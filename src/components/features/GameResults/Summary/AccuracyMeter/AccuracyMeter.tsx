import React from 'react';
import { SummaryCard } from '../SummaryCard';
import { AccuracyLabel } from '../../../../ui';
import { MeterMarkers } from './MeterMarkers';
import { QualityLabels } from './QualityLabels';
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
      icon={<AccuracyLabel className={styles.icon} />}
      label="Точность"
      value={<span className={`${styles.accuracyValue} ${accuracyColorClass}`}>{accuracy}%</span>}
    >
      <div className={styles.accuracyMeter}>
        <div className={styles.meterTrack}>
          <div
            className={`${styles.meterFill} ${accuracyColorClass}`}
            style={{ width: `${accuracy}%` }}
          />
          <MeterMarkers />
          <QualityLabels />
        </div>
      </div>
    </SummaryCard>
  );
};
