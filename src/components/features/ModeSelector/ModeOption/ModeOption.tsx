import React, { useRef } from 'react';
import { OptionHeader } from './OptionHeader';
import styles from './ModeOption.module.scss';

interface ModeOptionProps {
  isSelected: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
  label?: string;
  children: React.ReactNode;
  isTransitioning?: boolean;
}

export const ModeOption = ({
  isSelected,
  onSelect,
  icon,
  label,
  children,
  isTransitioning = false,
}: ModeOptionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${styles.option} ${isSelected ? styles.selected : ''} ${isTransitioning ? styles.transitioning : ''}`}
    >
      <OptionHeader
        isSelected={isSelected}
        onSelect={onSelect}
        icon={icon}
        label={label}
        disabled={isTransitioning}
      />
      <div ref={contentRef} className={`${styles.content} ${isSelected ? styles.open : ''}`}>
        {children}
      </div>
    </div>
  );
};
