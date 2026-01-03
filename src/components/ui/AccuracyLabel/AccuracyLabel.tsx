import React from 'react';
import classNames from 'classnames';
import { AccuracyIcon } from '../../../icons';
import styles from './AccuracyLabel.module.scss';

interface AccuracyLabelProps {
  className?: string;
}

export const AccuracyLabel = ({ className }: AccuracyLabelProps) => {
  return (
    <div className={classNames(styles.accuracy, className)}>
      <AccuracyIcon animated />
    </div>
  );
};
