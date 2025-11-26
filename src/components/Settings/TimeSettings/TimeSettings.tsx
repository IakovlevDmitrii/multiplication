import React from 'react';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setTimePerQuestion } from '../../../store/gameSlice';

const TimeSettings: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { timePerQuestions } = useAppSelector(state => state.game.settings);

  const timeOptions: number[] = [5, 10, 15, 20, 30, 0];

  const handleTimeChange = (time: number) => {
    dispatch(setTimePerQuestion(time));
  };

  const currentIndex: number = timeOptions.indexOf(timePerQuestions);
  const position: number = (currentIndex / (timeOptions.length - 1)) * 100;

  return (
    <SettingsPanel
      title={'Время на ответы'}
      options={timeOptions}
      currentIndex={currentIndex}
      position={position}
      currentSettings={timePerQuestions}
      onSettingsChange={handleTimeChange}
    />
  );
};

export default TimeSettings;
