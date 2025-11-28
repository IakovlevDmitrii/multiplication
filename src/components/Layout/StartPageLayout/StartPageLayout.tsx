import React from 'react';
import { PageLayout } from '../../Layout';

interface StartPageLayoutProps {
  children: React.ReactNode;
}

export const StartPageLayout = ({ children }: StartPageLayoutProps) => {
  return <PageLayout maxWidth="400px">{children}</PageLayout>;
};
