import React from 'react';
import Button from '../Button/Button';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { checkAnswer } from '../../../store/gameSlice';
import styles from './AnswerButton.module.scss';

const AnswerButton: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { userAnswer } = useAppSelector((state) => state.game);

  return (
    <Button
      className={styles.answerBtn}
      onClick={() => dispatch(checkAnswer())}
      disabled={!userAnswer}
    >
      Ответить
    </Button>
  );
};

export default AnswerButton;