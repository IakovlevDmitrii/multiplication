import React from 'react';
import { BackSpaceKeyButton, ClearKeyButton, NumberKeyButton } from '../buttons/keyButtons';
import styles from './VirtualKeyboard.module.scss';

const VirtualKeyboard: React.FC = (): React.JSX.Element => (
  <div className={styles.keyboard}>
    <div className={styles.row}>
      {['1', '2', '3'].map(num => (
        <NumberKeyButton key={num} numberKey={num} />
      ))}
    </div>
    <div className={styles.row}>
      {['4', '5', '6'].map(num => (
        <NumberKeyButton key={num} numberKey={num} />
      ))}
    </div>
    <div className={styles.row}>
      {['7', '8', '9'].map(num => (
        <NumberKeyButton key={num} numberKey={num} />
      ))}
    </div>
    <div className={styles.row}>
      <ClearKeyButton />
      <NumberKeyButton numberKey={'0'} />
      <BackSpaceKeyButton />
    </div>
  </div>
);

export default VirtualKeyboard;
