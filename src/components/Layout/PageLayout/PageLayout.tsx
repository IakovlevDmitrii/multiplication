import React from 'react';
import { CenteredLayout, Header } from '../../Layout';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth: string;
}

export const PageLayout = ({ children, maxWidth }: PageLayoutProps) => {
  return (
    <CenteredLayout maxWidth={maxWidth}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </CenteredLayout>
  );
};
