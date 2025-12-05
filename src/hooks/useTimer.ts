import { useEffect, useState } from 'react';
import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import { setTimeOver } from '../store/gameSlice';
import { GAME_STATE } from '../constants';

export const useTimer = (onTimeUpdate?: (timeLeft: number) => void) => {
  const dispatch = useAppDispatch();
  const { gameState } = useAppSelector(state => state.game);
  const { questionCount, timePerQuestion } = useAppSelector(state => state.game.settings);
  const timePerQuestions = questionCount * timePerQuestion;
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    if (currentTime >= timePerQuestions && gameState === GAME_STATE.PLAYING) {
      dispatch(setTimeOver());
    }
  }, [currentTime, timePerQuestions, gameState, dispatch]);
  useEffect(() => {
    if (gameState === GAME_STATE.PLAYING) {
      setCurrentTime(0);
    }
  }, [gameState, timePerQuestions]);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameState === GAME_STATE.PLAYING && currentTime < timePerQuestions) {
      timer = setInterval(() => {
        setCurrentTime(prev => {
          const newTime: number = prev + 1;
          if (onTimeUpdate) {
            onTimeUpdate(newTime);
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, currentTime, dispatch, timePerQuestions, onTimeUpdate]);
  const timeProgress: number = currentTime / timePerQuestions;

  return { currentTime, timeProgress, timeLeft: timePerQuestions - currentTime };
};
