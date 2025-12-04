import {
  GAME_STATE,
  GAME_MODE,
  TIME_PER_QUESTION,
  TIME_PER_QUESTION_LEVELS,
  QUESTION_COUNTS,
  QUESTION_COUNTS_LEVELS,
} from '../constants';

export type GameState = (typeof GAME_STATE)[keyof typeof GAME_STATE];
export type GameMode = (typeof GAME_MODE)[keyof typeof GAME_MODE]['MODE'];
export type TimePerQuestion = (typeof TIME_PER_QUESTION)[keyof typeof TIME_PER_QUESTION];
export type TimePerQuestionLevels =
  (typeof TIME_PER_QUESTION_LEVELS)[keyof typeof TIME_PER_QUESTION_LEVELS]['label'];
export type QuestionCount = (typeof QUESTION_COUNTS)[keyof typeof QUESTION_COUNTS];
export type QuestionCountsLevel = keyof typeof QUESTION_COUNTS_LEVELS;
export type SettingValue = TimePerQuestion | QuestionCount;

export type SingleNumberConfig = {
  mode: typeof GAME_MODE.SINGLE_NUMBER.MODE;
  currentNumber: number;
  minMultiplier: number;
  maxMultiplier: number;
};

export type TwoNumbersConfig = {
  mode: typeof GAME_MODE.TWO_NUMBERS.MODE;
  minNumber: number;
  maxNumber: number;
};

export type GameConfig = SingleNumberConfig | TwoNumbersConfig;

export type Question = {
  num1: number;
  num2: number;
  correctAnswer: number;
};

export type GameResult = {
  question: string;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
};

export type GameSliceState = {
  currentQuestion: Question | null;
  // questionHistory: {
  //   lastQuestions: string[];
  //   allQuestions: string[];
  // };
  userAnswer: string;
  score: number;
  gameState: GameState;
  results: GameResult[];
  gameConfig: GameConfig;
  settings: {
    level: TimePerQuestionLevels;
    questionCount: QuestionCount;
    timePerQuestion: TimePerQuestion;
  };
};
