export interface Question {
  num1: number;
  num2: number;
  correctAnswer: number;
}

export interface GameResult {
  question: string;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

export const GAME_STATE_VARIANTS = {
  IDLE: 'idle',
  PLAYING: 'playing',
  FINISHED: 'finished',
} as const;

export type GameStateType = (typeof GAME_STATE_VARIANTS)[keyof typeof GAME_STATE_VARIANTS];
