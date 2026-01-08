import React from 'react';
import classNames from 'classnames';
import styles from './SmallCard.module.scss';

interface SmallCardProps {
  className?: string;
  children: React.ReactNode;
}

export const SmallCard = ({ className, children }: SmallCardProps) => {
  const cardClasses = classNames(styles.card, className);
  return <div className={cardClasses}>{children}</div>;
};
