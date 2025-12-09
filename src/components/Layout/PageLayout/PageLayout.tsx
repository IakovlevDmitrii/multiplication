import React, { ReactNode } from 'react';
import { CenteredLayout, Header } from '../../Layout';
import styles from './PageLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => (
  <CenteredLayout>
    <Header />
    <main className={styles.main}>{children}</main>
    <footer></footer>
  </CenteredLayout>
);
