import React from 'react';
import { SettingsPanel } from '../../../ui';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { setTimePerQuestion } from '../../../../store/gameSlice';
import { TIME_PER_QUESTION } from '../../../../constants';
import type { TimePerQuestion } from '../../../../types';

export const TimeSettings = () => {
  const dispatch = useAppDispatch();
  const { timePerQuestion } = useAppSelector(state => state.game.settings);
  const handleTimeChange = (time: TimePerQuestion) => {
    dispatch(setTimePerQuestion(time));
  };
  return (
    <SettingsPanel
      title="Время на ответ"
      options={TIME_PER_QUESTION}
      currentValue={timePerQuestion}
      onSettingsChange={handleTimeChange}
    />
  );
};
