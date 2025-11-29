import { GAME_STATE_VARIANTS, GAME_MODE_VARIANTS } from '../constants';
export type GameMode = (typeof GAME_MODE_VARIANTS)[keyof typeof GAME_MODE_VARIANTS];

export interface SingleNumberConfig {
  mode: typeof GAME_MODE_VARIANTS.SINGLE_NUMBER;
  currentNumber: number;
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
  // questionHistory: {
  //   lastQuestions: string[];
  //   allQuestions: string[];
  // };
  userAnswer: string;
  score: number;
  gameState: GameStateType;
  results: GameResult[];
  gameConfig: GameConfig;
  settings: {
    timePerQuestions: number;
    questionCount: number;
  };
}
