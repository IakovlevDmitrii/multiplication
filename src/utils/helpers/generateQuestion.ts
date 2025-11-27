import { GameConfig } from '../../types';

export const generateQuestion = (config: GameConfig): { num1: number; num2: number } => {
  switch (config.mode) {
    case 'single-number':
      return {
        num1: config.number,
        num2:
          Math.floor(Math.random() * (config.maxMultiplier - config.minMultiplier + 1)) +
          config.minMultiplier,
      };
    case 'two-numbers':
      const num1 =
        Math.floor(Math.random() * (config.maxNumber - config.minNumber + 1)) + config.minNumber;
      const num2 =
        Math.floor(Math.random() * (config.maxNumber - config.minNumber + 1)) + config.minNumber;
      return { num1, num2 };
    default:
      return { num1: 2, num2: 2 };
  }
};
