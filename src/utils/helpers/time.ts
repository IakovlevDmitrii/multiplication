const formatTime: (seconds: number) => string = (seconds: number): string => {
  const minutes: number = Math.floor(seconds / 60);
  const secs: number = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export default formatTime;
