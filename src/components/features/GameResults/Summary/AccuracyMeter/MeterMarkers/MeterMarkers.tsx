import React from 'react';
import styles from './MeterMarkers.module.scss';

export const MeterMarkers = () => {
  return (
    <div className={styles.meterMarkers}>
      {[0, 25, 50, 75, 100].map(marker => (
        <div key={marker} className={styles.marker} style={{ left: `${marker}%` }}>
          <div className={styles.markerLine} />
          <div className={styles.markerLabel}>{marker}%</div>
        </div>
      ))}
    </div>
  );
};
