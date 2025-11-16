import type { Difficulty } from '../utils/constants/difficultyLevels';
import type { Question, GameResult, GameStateType } from './game';

export interface GameSliceState {
  currentQuestion: Question | null;
  userAnswer: string;
  score: number;
  timeLeft: number;
  gameState: GameStateType;
  difficulty: Difficulty;
  results: GameResult[];
  totalQuestions: number;
}
