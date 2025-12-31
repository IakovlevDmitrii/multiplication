import React from 'react';
import classNames from 'classnames';
import styles from './Number.module.scss';

interface QuestionSectionNumberProps {
  children?: React.ReactNode;
  className?: string;
}

export const Number = ({ children, className }: QuestionSectionNumberProps) => {
  return <span className={classNames(styles.number, className)}>{children}</span>;
};
