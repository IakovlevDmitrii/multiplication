import React from 'react';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setQuestionCount } from '../../../store/gameSlice';

const QuestionCountSettings: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { questionCount } = useAppSelector(state => state.game.settings);

  const countOptions: number[] = [5, 10, 15, 20, 30];

  const handleCountChange = (count: number) => {
    dispatch(setQuestionCount(count));
  };

  const currentIndex: number = countOptions.indexOf(questionCount);
  const position: number = (currentIndex / (countOptions.length - 1)) * 100;

  return (
    <SettingsPanel
      title={'Количество вопросов'}
      options={countOptions}
      currentIndex={currentIndex}
      position={position}
      currentSettings={questionCount}
      onSettingsChange={handleCountChange}
    />
  );
};

export default QuestionCountSettings;
