export interface DifficultyLevel {
  time: number;
  questions: number;
  maxNumber: number;
}

export interface DifficultyLevels {
  [key: string]: DifficultyLevel;
}

export const DIFFICULTY_LEVELS: DifficultyLevels = {
  easy: { time: 10, questions: 5, maxNumber: 5 },
  medium: { time: 240, questions: 10, maxNumber: 9 },
  hard: { time: 180, questions: 15, maxNumber: 12 },
};

export type Difficulty = keyof typeof DIFFICULTY_LEVELS;
