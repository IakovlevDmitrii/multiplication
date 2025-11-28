import React from 'react';
import { PageLayout } from '../../Layout';
import type { PagesLayoutProps } from '../../../types';

export const StartPageLayout = ({ children }: PagesLayoutProps) => {
  return <PageLayout maxWidth="400px">{children}</PageLayout>;
};
