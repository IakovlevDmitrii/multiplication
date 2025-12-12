import React from 'react';
import { SettingsIcon } from '../../../icons';
import styles from '../HeaderButtons.module.scss';

interface SettingsButtonProps {
  onClick: () => void;
}

export const SettingsButton = ({ onClick }: SettingsButtonProps) => {
  return (
    <button
      type="button"
      className={styles.headerButton}
      onClick={onClick}
      title="Настройки"
      aria-label="Настройки"
    >
      <SettingsIcon />
    </button>
  );
};
