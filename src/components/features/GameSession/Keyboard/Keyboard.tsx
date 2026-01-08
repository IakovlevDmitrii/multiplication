import React from 'react';
import { Card, SmallCard } from '../../../ui';
import { BackSpaceKey } from './BackSpaceKey';
import { ClearKey } from './ClearKey';
import { NumberKey } from './NumberKey';
import { SubmitKey } from './SubmitKey';
import styles from './Keyboard.module.scss';

export const Keyboard = () => {
  return (
    <Card className={styles.keyboard}>
      <SmallCard className={styles.keys} aria-label="Виртуальная клавиатура">
        <NumberKey key="1" numberKey="1" className={styles.key1} />
        <NumberKey key="2" numberKey="2" className={styles.key2} />
        <NumberKey key="3" numberKey="3" className={styles.key3} />
        <NumberKey key="4" numberKey="4" className={styles.key4} />
        <NumberKey key="5" numberKey="5" className={styles.key5} />
        <NumberKey key="6" numberKey="6" className={styles.key6} />
        <NumberKey key="7" numberKey="7" className={styles.key7} />
        <NumberKey key="8" numberKey="8" className={styles.key8} />
        <NumberKey key="9" numberKey="9" className={styles.key9} />
        <ClearKey className={styles.keyClear} />
        <NumberKey key="0" numberKey="0" className={styles.key0} />
        <BackSpaceKey className={styles.keyBackspace} />
        <SubmitKey className={styles.keySubmit} />
      </SmallCard>
    </Card>
  );
};
