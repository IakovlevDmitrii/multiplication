import React from 'react';
import { Page } from '../../components/layout';
import { Example, Keyboard } from '../../components/features';
import { useGameKeyboard } from '../../hooks';
import styles from './GamePage.module.scss';

export const GamePage = () => {
  useGameKeyboard();
  return (
    <Page className={styles.page}>
      <Example />
      <Keyboard />
    </Page>
  );
};
