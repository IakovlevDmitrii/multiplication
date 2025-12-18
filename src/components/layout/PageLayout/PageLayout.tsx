import React, { ReactNode } from 'react';
import { Header, Footer } from '../../layout';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
