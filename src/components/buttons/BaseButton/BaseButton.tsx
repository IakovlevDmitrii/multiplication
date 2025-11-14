import React from 'react';

export interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
}) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);

export default BaseButton;