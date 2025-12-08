import { useEffect, useState, useRef } from 'react';
import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import { setTimeOver } from '../store/gameSlice';
import { GAME_STATE } from '../constants';

export const useTimer = () => {
  const dispatch = useAppDispatch();
  const { gameState, results } = useAppSelector(state => state.game);
  const { questionCount, timePerQuestion } = useAppSelector(state => state.game.settings);

  const totalGameTime = questionCount * timePerQuestion;
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (gameState === GAME_STATE.PLAYING) {
      setSecondsElapsed(0);

      // Очищаем предыдущие таймеры
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [gameState]);

  useEffect(() => {
    const allQuestionsAnswered = results.length >= questionCount;
    const timeIsUp = secondsElapsed >= totalGameTime;

    if (gameState === GAME_STATE.PLAYING && (allQuestionsAnswered || timeIsUp)) {
      // Даем небольшую задержку чтобы прогресс визуально дошел до конца
      timeoutRef.current = setTimeout(() => {
        dispatch(setTimeOver());
      }, 500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [secondsElapsed, totalGameTime, results.length, questionCount, gameState, dispatch]);

  // Запускаем интервальный таймер
  useEffect(() => {
    if (gameState !== GAME_STATE.PLAYING || totalGameTime <= 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setSecondsElapsed(prev => {
        return prev + 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [gameState, totalGameTime]);

  const timeProgress: number = totalGameTime > 0 ? Math.min(secondsElapsed / totalGameTime, 1) : 0;
  const timeLeft: number = Math.max(0, totalGameTime - secondsElapsed);

  return {
    currentTime: secondsElapsed,
    timeProgress,
    timeLeft,
    totalGameTime,
  };
};
