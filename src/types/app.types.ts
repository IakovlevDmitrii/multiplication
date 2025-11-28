import React from 'react';

export interface OutletContext {
  onStartGame: () => void;
  onGoToMainMenu: () => void;
}

export interface PagesLayoutProps {
  children: React.ReactNode;
}
