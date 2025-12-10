import React, { ReactNode } from 'react';
import { Header, Footer } from '../../Layout';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
