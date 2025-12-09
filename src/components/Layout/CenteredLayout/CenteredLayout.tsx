import React, { ReactNode } from 'react';
import styles from './CenteredLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const CenteredLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
