import React from 'react';
import { BackSpaceKeyButton, ClearKeyButton, NumberKeyButton } from '../buttons/keyButtons';
import styles from './VirtualKeyboard.module.scss';

const VirtualKeyboard: React.FC = (): React.JSX.Element => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className={styles.keyboard}>
      {numbers.map(num => (
        <NumberKeyButton key={num} numberKey={num} />
      ))}

      <div className={styles.bottomRow}>
        <ClearKeyButton />
        <NumberKeyButton numberKey={'0'} />
        <BackSpaceKeyButton />
      </div>
    </div>
  );
};

export default VirtualKeyboard;
