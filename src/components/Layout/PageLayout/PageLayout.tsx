import React from 'react';
import { CenteredLayout, Header } from '../../Layout';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth: string;
  showHomeButton?: boolean;
}

export const PageLayout = ({ children, maxWidth, showHomeButton = false }: PageLayoutProps) => {
  return (
    <CenteredLayout maxWidth={maxWidth}>
      <Header showHomeButton={showHomeButton} />
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </CenteredLayout>
  );
};
