import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Page.module.scss';

interface PageLayoutProps {
  className?: string;
  children: ReactNode;
}

export const Page = ({ className, children }: PageLayoutProps) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={classNames(styles.main, className)}>{children}</main>
      <Footer />
    </div>
  );
};
