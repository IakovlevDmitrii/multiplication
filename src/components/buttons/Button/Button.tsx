import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  disabled = false,
}): React.JSX.Element => {
  const buttonClass: string = classNames(
    styles.button,
    {[styles.disabled]: disabled},
    className
  );

  return (
    <button
      type = 'button'
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;