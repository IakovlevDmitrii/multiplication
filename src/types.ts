import type { Difficulty } from './utils/constants/difficultyLevels';

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

export type GameState = 'idle' | 'playing' | 'finished';

// Redux state
export interface GameSliceState {
  currentQuestion: Question | null;
  userAnswer: string;
  score: number;
  timeLeft: number;
  gameState: GameState;
  difficulty: Difficulty;
  results: GameResult[];
  totalQuestions: number;
}

export interface OutletContext {
  onStartGame: () => void;
  onGoToMainMenu: () => void;
}
