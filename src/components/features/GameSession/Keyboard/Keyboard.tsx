import React from 'react';
import { Card } from '../../../ui';
import { BackSpaceKeyButton } from './BackSpaceKeyButton';
import { ClearKeyButton } from './ClearKeyButton';
import { NumberKeyButton } from './NumberKeyButton';
import { SubmitKeyButton } from './SubmitKeyButton';
import styles from './Keyboard.module.scss';

export const Keyboard = () => {
  return (
    <Card className={styles.keyboard}>
      <article className={styles.keys} role="group" aria-label="Виртуальная клавиатура">
        <NumberKeyButton key="1" numberKey="1" className={styles.key1} />
        <NumberKeyButton key="2" numberKey="2" className={styles.key2} />
        <NumberKeyButton key="3" numberKey="3" className={styles.key3} />
        <NumberKeyButton key="4" numberKey="4" className={styles.key4} />
        <NumberKeyButton key="5" numberKey="5" className={styles.key5} />
        <NumberKeyButton key="6" numberKey="6" className={styles.key6} />
        <NumberKeyButton key="7" numberKey="7" className={styles.key7} />
        <NumberKeyButton key="8" numberKey="8" className={styles.key8} />
        <NumberKeyButton key="9" numberKey="9" className={styles.key9} />
        <ClearKeyButton className={styles.keyClear} />
        <NumberKeyButton key="0" numberKey="0" className={styles.key0} />
        <BackSpaceKeyButton className={styles.keyBackspace} />
        <SubmitKeyButton className={styles.keySubmit} />
      </article>
    </Card>
  );
};
