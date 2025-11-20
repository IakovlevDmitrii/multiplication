import { GAME_STATE_VARIANTS } from '../utils/constants';

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

export type GameStateType = (typeof GAME_STATE_VARIANTS)[keyof typeof GAME_STATE_VARIANTS];
