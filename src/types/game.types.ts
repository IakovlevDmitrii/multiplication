import { GAME_STATE, GAME_MODE, TIME_PER_QUESTION, QUESTION_COUNTS } from '../constants';

export type GameState = (typeof GAME_STATE)[keyof typeof GAME_STATE];
export type GameMode = (typeof GAME_MODE)[keyof typeof GAME_MODE]['MODE'];

export type TimePerQuestion = (typeof TIME_PER_QUESTION)[number]['value'];
export type QuestionCount = (typeof QUESTION_COUNTS)[number]['value'];
export type SettingValue = TimePerQuestion | QuestionCount;
export type SettingsOption<T extends number = SettingValue> = {
  value: T;
  label: string;
};

export type TimePerQuestionOption = (typeof TIME_PER_QUESTION)[number];
export type QuestionCountOption = (typeof QUESTION_COUNTS)[number];

export type SingleNumberConfig = {
  mode: typeof GAME_MODE.SINGLE.MODE;
  currentNumber: number;
  minMultiplier: number;
  maxMultiplier: number;
};

export type TwoNumbersConfig = {
  mode: typeof GAME_MODE.MULTI.MODE;
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
  userAnswer: string;
  score: number;
  gameState: GameState;
  results: GameResult[];
  gameConfig: GameConfig;
  settings: {
    questionCount: QuestionCount;
    timePerQuestion: TimePerQuestion;
  };
};
