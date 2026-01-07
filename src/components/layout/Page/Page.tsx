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
  const mainClasses = classNames(styles.main, className);
  return (
    <div className={styles.page}>
      <Header />
      <main className={mainClasses}>{children}</main>
      <Footer />
    </div>
  );
};
