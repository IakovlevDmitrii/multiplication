import React from 'react';
import KeyButton from '../KeyButton/KeyButton';
import { useAppDispatch } from '../../hooks/redux';
import { appendToAnswer, backspaceAnswer, clearAnswer } from '../../store/gameSlice';
import styles from './VirtualKeyboard.module.scss';

const VirtualKeyboard: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>
        {['1', '2', '3'].map(num => (
          <KeyButton
            key={num}
            label={num.toString()}
            type="number"
            onClick={() => dispatch(appendToAnswer(num))}
          />
        ))}
      </div>
      <div className={styles.row}>
        {['4', '5', '6'].map(num => (
          <KeyButton
            key={num}
            label={num.toString()}
            type="number"
            onClick={() => dispatch(appendToAnswer(num))}
          />
        ))}
      </div>
      <div className={styles.row}>
        {['7', '8', '9'].map(num => (
          <KeyButton
            key={num}
            label={num.toString()}
            type="number"
            onClick={() => dispatch(appendToAnswer(num))}
          />
        ))}
      </div>
      <div className={styles.row}>
        <KeyButton
          label="C"
          type="clear"
          onClick={() => dispatch(clearAnswer())}
        />
        <KeyButton
          label="0"
          type="number"
          onClick={() => dispatch(appendToAnswer('0'))}
        />
        <KeyButton
          label="⌫"
          type="backspace"
          onClick={() => dispatch(backspaceAnswer())}
        />
      </div>
    </div>
  );
};

export default VirtualKeyboard;