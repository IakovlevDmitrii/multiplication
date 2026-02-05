import React from 'react';
import classNames from 'classnames';
import styles from './SmallCard.module.scss';

interface SmallCardProps {
  className?: string;
  children: React.ReactNode;
}

export const SmallCard = ({ className, children }: SmallCardProps) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
