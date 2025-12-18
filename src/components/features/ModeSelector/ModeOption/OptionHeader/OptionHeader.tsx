import React from 'react';
import styles from './OptionHeader.module.scss';

interface OptionHeaderProps {
  isSelected: boolean;
  onSelect: () => void;
  label?: string | React.ReactNode;
  disabled?: boolean;
}

export const OptionHeader = ({
  isSelected,
  onSelect,
  label,
  disabled = false,
}: OptionHeaderProps) => {
  return (
    <button
      type="button"
      className={`${styles.radioButton} ${isSelected ? styles.radioButtonActive : ''}`}
      onClick={onSelect}
      disabled={disabled}
    >
      <span className={styles.radioDot} />
      {label && <span className={styles.optionLabel}>{label}</span>}
    </button>
  );
};
