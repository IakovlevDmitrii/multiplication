import React from 'react';
import { HeaderButton } from '../HeaderButton';
import { SettingsIcon } from '../../../../icons';

interface SettingsButtonProps {
  className?: string;
  onClick: () => void;
}

export const SettingsButton = ({ className, onClick }: SettingsButtonProps) => {
  return (
    <HeaderButton title="Настройки" ariaLabel="Настройки" className={className} onClick={onClick}>
      <SettingsIcon />
    </HeaderButton>
  );
};
