import React, { useRef, useEffect, useState } from 'react';
import styles from './ModeOption.module.scss';

interface ModeOptionProps {
  isSelected: boolean;
  onSelect: () => void;
  label: string;
  children?: React.ReactNode;
}

const ModeOption: React.FC<ModeOptionProps> = ({ isSelected, onSelect, label, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={`${styles.option} ${isSelected ? styles.optionSelected : ''}`}>
      <div className={styles.radioOption}>
        <button
          type="button"
          className={`${styles.radioButton} ${isSelected ? styles.radioButtonActive : ''}`}
          onClick={onSelect}
        >
          <span className={styles.radioDot} />
          <span className={styles.optionLabel}>{label}</span>
        </button>
      </div>

      <div
        ref={contentRef}
        className={styles.configPanel}
        style={{
          maxHeight: isSelected ? `${contentHeight}px` : '0px',
          opacity: isSelected ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModeOption;
