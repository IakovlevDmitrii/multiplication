import { colors } from '../../styles/colors';

const formatTime: (seconds: number) => string = (seconds: number): string => {
  const minutes: number = Math.floor(seconds / 60);
  const secs: number = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const getTimeColor = (progress: number): string => {
  if (progress <= 0.3) return colors.timeSafe;
  if (progress <= 0.6) return colors.timeWarning;
  if (progress <= 0.8) return colors.timeDanger;
  return colors.timeCritical;
};

export { formatTime, getTimeColor };
