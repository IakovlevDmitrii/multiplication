import React, { useState, useRef, useCallback, useEffect } from 'react';
import { OptionNumber } from '../../../../ui';
import { MULTIPLIERS_RANGE } from '../../../../../constants';
import styles from './RangeGroup.module.scss';

interface RangeGroupProps {
  label: string | React.ReactNode;
  min: number;
  max: number;
  setMin: (num: number) => void;
  setMax: (num: number) => void;
}

export const RangeGroup = ({ label, min, max, setMin, setMax }: RangeGroupProps) => {
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const minIndex = MULTIPLIERS_RANGE.indexOf(min);
  const maxIndex = MULTIPLIERS_RANGE.indexOf(max);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (!trackRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const clickPosition = (e.clientX - trackRect.left) / trackRect.width;
      const index = Math.round(clickPosition * (MULTIPLIERS_RANGE.length - 1));
      const clickedValue =
        MULTIPLIERS_RANGE[Math.max(0, Math.min(MULTIPLIERS_RANGE.length - 1, index))];

      // Определяем, ближе к какому краю
      const distanceToMin = Math.abs(clickedValue - min);
      const distanceToMax = Math.abs(clickedValue - max);

      if (distanceToMin <= distanceToMax) {
        setMin(clickedValue);
      } else {
        setMax(clickedValue);
      }
    },
    [min, max, setMin, setMax]
  );

  const handleThumbMouseDown = (type: 'min' | 'max') => (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(type);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const position = (e.clientX - trackRect.left) / trackRect.width;
      const index = Math.round(position * (MULTIPLIERS_RANGE.length - 1));
      const value = MULTIPLIERS_RANGE[Math.max(0, Math.min(MULTIPLIERS_RANGE.length - 1, index))];

      if (isDragging === 'min') {
        if (value <= max) setMin(value);
      } else {
        if (value >= min) setMax(value);
      }
    },
    [isDragging, min, max, setMin, setMax]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const minPosition = (minIndex / (MULTIPLIERS_RANGE.length - 1)) * 100;
  const maxPosition = (maxIndex / (MULTIPLIERS_RANGE.length - 1)) * 100;

  return (
    <div className={styles.group}>
      <div className={styles.title}>{label}</div>
      <div className={styles.compactRange}>
        <div className={styles.rangeValues}>
          <OptionNumber number={min} />
          <span className={styles.separator}>—</span>
          <OptionNumber number={max} />
        </div>
        <div ref={trackRef} className={styles.track} onClick={handleTrackClick}>
          <div
            className={styles.range}
            style={{
              left: `${minPosition}%`,
              width: `${maxPosition - minPosition}%`,
            }}
          />
          <button
            type="button"
            className={`${styles.thumb} ${styles.thumbMin}`}
            style={{ left: `${minPosition}%` }}
            onMouseDown={handleThumbMouseDown('min')}
          />
          <button
            type="button"
            className={`${styles.thumb} ${styles.thumbMax}`}
            style={{ left: `${maxPosition}%` }}
            onMouseDown={handleThumbMouseDown('max')}
          />
        </div>
        <div className={styles.scale}>
          <span>{MULTIPLIERS_RANGE[0]}</span>
          <span>{MULTIPLIERS_RANGE[MULTIPLIERS_RANGE.length - 1]}</span>
        </div>
      </div>
    </div>
  );
};
