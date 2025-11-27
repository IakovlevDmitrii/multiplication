import { GAME_STATE_VARIANTS, GAME_MODE_VARIANTS } from '../constants';
import type { Difficulty } from '../constants/difficultyLevels';

export type GameMode = (typeof GAME_MODE_VARIANTS)[keyof typeof GAME_MODE_VARIANTS];

export interface SingleNumberConfig {
  mode: typeof GAME_MODE_VARIANTS.SINGLE_NUMBER;
  number: number;
  minMultiplier: number;
  maxMultiplier: number;
}

export interface TwoNumbersConfig {
  mode: typeof GAME_MODE_VARIANTS.TWO_NUMBERS;
  minNumber: number;
  maxNumber: number;
}

export type GameConfig = SingleNumberConfig | TwoNumbersConfig;

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

export interface GameSliceState {
  currentQuestion: Question | null;
  userAnswer: string;
  score: number;
  gameState: GameStateType;
  difficulty: Difficulty;
  results: GameResult[];
  totalQuestions: number;
  totalTime: number;
  gameConfig: GameConfig;
  currentNumber?: number;
  settings: {
    timePerQuestions: number;
    questionCount: number;
  };
}
