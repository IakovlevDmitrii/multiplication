import React from 'react';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { setTimePerQuestion } from '../../../store/gameSlice';

const TimeSettings: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { timePerQuestion } = useAppSelector(state => state.game.settings);

  const timeOptions: number[] = [5, 10, 15, 20, 30, 0];

  const handleTimeChange = (time: number) => {
    dispatch(setTimePerQuestion(time));
  };

  const currentIndex: number = timeOptions.indexOf(timePerQuestion);
  const position: number = (currentIndex / (timeOptions.length - 1)) * 100;

  return (
    <SettingsPanel
      title={'Время на ответ'}
      options={timeOptions}
      currentIndex={currentIndex}
      position={position}
      currentSettings={timePerQuestion}
      onSettingsChange={handleTimeChange}
    />
  );
};

export default TimeSettings;
