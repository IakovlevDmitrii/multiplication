import React from 'react';
import styles from './QuestionsPreview.module.scss';

interface QuestionsPreviewProps {
  children: React.ReactNode;
}

export const QuestionsPreview = ({ children }: QuestionsPreviewProps) => {
  return <div className={styles.preview}>{children}</div>;
};
