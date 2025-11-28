import React from 'react';
import styles from './CenteredLayout.module.scss';

interface CenteredLayoutProps {
  children: React.ReactNode;
  maxWidth: string;
}

export const CenteredLayout = ({ children, maxWidth }: CenteredLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};
