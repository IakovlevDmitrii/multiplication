import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  const cardClasses = classNames(styles.card, className);
  return <article className={cardClasses}>{children}</article>;
};
