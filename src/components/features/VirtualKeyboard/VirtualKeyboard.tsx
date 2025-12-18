import React from 'react';
import { BackSpaceKeyButton, ClearKeyButton, NumberKeyButton } from './KeyButtons';
import styles from './VirtualKeyboard.module.scss';

export const VirtualKeyboard = () => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <article className={styles.keyboard} role="group" aria-label="Виртуальная клавиатура">
      <div className={styles.keyboardGrid}>
        {numbers.map(num => (
          <NumberKeyButton key={num} numberKey={num} />
        ))}
      </div>
      <div className={styles.bottomRow}>
        <ClearKeyButton />
        <NumberKeyButton numberKey={'0'} />
        <BackSpaceKeyButton />
      </div>
    </article>
  );
};
