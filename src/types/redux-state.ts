import type { Difficulty } from '../utils/constants/difficultyLevels';
import type { Question, GameResult, GameState } from './game';

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
