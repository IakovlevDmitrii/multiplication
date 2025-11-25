import React from 'react';
import styles from './ModeOption.module.scss';

interface ModeOptionProps {
  isSelected: boolean;
  onSelect: () => void;
  label: string;
  children?: React.ReactNode;
}

const ModeOption: React.FC<ModeOptionProps> = ({
  isSelected,
  onSelect,
  label,
  children,
}): React.JSX.Element => {
  return (
    <div className={`${styles.option} ${isSelected ? styles.optionActive : ''}`}>
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

      {isSelected && children && <div className={styles.configPanel}>{children}</div>}
    </div>
  );
};

export default ModeOption;
