import React from 'react';
import { SummaryCard } from '../../../../ui';
import styles from './SummaryStats.module.scss';

interface SummaryStatsProps {
  score: number;
  questionCount: number;
  percentage: number;
  accuracy: number;
}

export const SummaryStats = ({ score, questionCount, percentage, accuracy }: SummaryStatsProps) => {
  const getAccuracyColorClass = (accuracy: number) => {
    if (accuracy >= 90) return styles.accuracyExcellent;
    if (accuracy >= 70) return styles.accuracyGood;
    if (accuracy >= 50) return styles.accuracyAverage;
    return styles.accuracyPoor;
  };

  const accuracyColorClass = getAccuracyColorClass(accuracy);

  return (
    <div className={styles.stats}>
      <SummaryCard
        icon="✅"
        label="Правильные ответы"
        value={
          <div className={styles.value}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreTotal}>/{questionCount}</span>
          </div>
        }
      >
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
          <div className={styles.progressLabel}>{percentage}%</div>
        </div>
      </SummaryCard>

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
    </div>
  );
};
