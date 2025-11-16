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
