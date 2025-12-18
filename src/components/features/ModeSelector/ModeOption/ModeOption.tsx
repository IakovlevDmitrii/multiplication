import React, { useRef, useEffect, useState } from 'react';
import { OptionHeader } from './OptionHeader';
import styles from './ModeOption.module.scss';

interface ModeOptionProps {
  isSelected: boolean;
  onSelect: () => void;
  label?: string | React.ReactNode;
  children: React.ReactNode;
  isTransitioning?: boolean;
}

export const ModeOption = ({
  isSelected,
  onSelect,
  label,
  children,
  isTransitioning = false,
}: ModeOptionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    if (!isSelected && !isTransitioning) {
      setAnimatingOut(false);
    } else if (!isSelected && isTransitioning) {
      setAnimatingOut(true);
    }
  }, [isSelected, isTransitioning]);

  return (
    <div
      className={`
      ${styles.option} 
      ${isSelected ? styles.optionSelected : ''} 
      ${animatingOut ? styles.animatingOut : ''}
      ${isTransitioning ? styles.transitioning : ''}
    `}
    >
      <OptionHeader
        isSelected={isSelected}
        onSelect={onSelect}
        label={label}
        disabled={isTransitioning}
      />
      <div
        ref={contentRef}
        className={`
          ${styles.configPanel} 
          ${isSelected ? styles.configPanelOpen : ''} 
          ${animatingOut ? styles.configPanelClosing : ''}
        `}
      >
        {children}
      </div>
    </div>
  );
};
