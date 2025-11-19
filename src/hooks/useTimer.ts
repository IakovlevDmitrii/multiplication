import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks/redux';
import { setTimeOver } from '../store/gameSlice';
import { GAME_STATE_VARIANTS } from '../utils/constants';

export const useTimer = (onTimeUpdate?: (timeLeft: number) => void) => {
  const dispatch = useAppDispatch();
  const { gameState, difficulty, totalTime } = useAppSelector(state => state.game);
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    if (currentTime >= totalTime && gameState === GAME_STATE_VARIANTS.PLAYING) {
      dispatch(setTimeOver());
    }
  }, [currentTime, totalTime, gameState, dispatch]);
  useEffect(() => {
    if (gameState === GAME_STATE_VARIANTS.PLAYING) {
      setCurrentTime(0);
    }
  }, [gameState, difficulty, totalTime]);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameState === GAME_STATE_VARIANTS.PLAYING && currentTime < totalTime) {
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
  }, [gameState, currentTime, dispatch, totalTime, onTimeUpdate]);
  const timeProgress: number = currentTime / totalTime;

  return { currentTime, timeProgress, timeLeft: totalTime - currentTime };
};
