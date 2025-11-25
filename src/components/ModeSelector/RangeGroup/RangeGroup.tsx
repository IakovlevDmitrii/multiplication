import React, { useState, useRef, useCallback } from 'react';
import styles from './RangeGroup.module.scss';

interface RangeGroupProps {
  label: string;
  numbers: number[];
  min: number;
  max: number;
  setMin: (num: number) => void;
  setMax: (num: number) => void;
}

const RangeGroup: React.FC<RangeGroupProps> = ({
  label,
  numbers,
  min,
  max,
  setMin,
  setMax,
}): React.JSX.Element => {
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const minIndex = numbers.indexOf(min);
  const maxIndex = numbers.indexOf(max);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (!trackRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const clickPosition = (e.clientX - trackRect.left) / trackRect.width;
      const index = Math.round(clickPosition * (numbers.length - 1));
      const clickedValue = numbers[Math.max(0, Math.min(numbers.length - 1, index))];

      // Определяем, ближе к какому краю
      const distanceToMin = Math.abs(clickedValue - min);
      const distanceToMax = Math.abs(clickedValue - max);

      if (distanceToMin <= distanceToMax) {
        setMin(clickedValue);
      } else {
        setMax(clickedValue);
      }
    },
    [min, max, numbers, setMin, setMax]
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
      const index = Math.round(position * (numbers.length - 1));
      const value = numbers[Math.max(0, Math.min(numbers.length - 1, index))];

      if (isDragging === 'min') {
        if (value <= max) setMin(value);
      } else {
        if (value >= min) setMax(value);
      }
    },
    [isDragging, min, max, numbers, setMin, setMax]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const minPosition = (minIndex / (numbers.length - 1)) * 100;
  const maxPosition = (maxIndex / (numbers.length - 1)) * 100;

  return (
    <div className={styles.rangeGroup}>
      <label className={styles.label}>{label}</label>

      <div className={styles.compactRange}>
        <div className={styles.rangeValues}>
          <span className={styles.value}>{min}</span>
          <span className={styles.separator}>—</span>
          <span className={styles.value}>{max}</span>
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
          <span>{numbers[0]}</span>
          <span>{numbers[numbers.length - 1]}</span>
        </div>
      </div>
    </div>
  );
};

export default RangeGroup;
