import React from 'react';
import styles from './QuestionsPreview.module.scss';

interface QuestionsPreviewProps {
  children: React.ReactNode;
}

const QuestionsPreview: React.FC<QuestionsPreviewProps> = ({ children }): React.JSX.Element => {
  return <div className={styles.preview}>{children}</div>;
};

export default QuestionsPreview;
