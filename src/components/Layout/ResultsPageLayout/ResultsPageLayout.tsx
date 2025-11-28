import React from 'react';
import { PageLayout } from '../../Layout';
import type { PagesLayoutProps } from '../../../types';

export const ResultsPageLayout = ({ children }: PagesLayoutProps) => {
  return (
    <PageLayout showHomeButton maxWidth="400px">
      {children}
    </PageLayout>
  );
};
