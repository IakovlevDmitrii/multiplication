import React from 'react';
import styles from './OptionHeader.module.scss';

interface OptionHeaderProps {
  isSelected: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
  label?: string;
  disabled?: boolean;
}

export const OptionHeader = ({
  isSelected,
  onSelect,
  icon,
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
      {icon && (
        <div className={styles.optionIcon}>
          <div className={styles.icon}>{icon}</div>
        </div>
      )}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};
