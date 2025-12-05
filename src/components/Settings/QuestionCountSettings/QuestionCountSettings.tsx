import React from 'react';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setQuestionCount } from '../../../store/gameSlice';
import { QUESTION_COUNTS } from '../../../constants';
import type { QuestionCount } from '../../../types';

const QuestionCountSettings = () => {
  const dispatch = useAppDispatch();
  const { questionCount } = useAppSelector(state => state.game.settings);

  const handleCountChange = (count: QuestionCount) => {
    dispatch(setQuestionCount(count));
  };

  return (
    <SettingsPanel
      title="Количество вопросов"
      options={QUESTION_COUNTS}
      currentValue={questionCount}
      onSettingsChange={handleCountChange}
    />
  );
};

export default QuestionCountSettings;
