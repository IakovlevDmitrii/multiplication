import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GAME_MODE_VARIANTS, GAME_STATE_VARIANTS } from '../constants';
import { generateQuestion } from '../helpers/generateQuestion';
import type { GameConfig, GameSliceState } from '../types';

const initialState: GameSliceState = {
  currentQuestion: null,
  // questionHistory: {
  //   lastQuestions: [],
  //   allQuestions: []
  // },
  userAnswer: '',
  score: 0,
  gameState: GAME_STATE_VARIANTS.IDLE,
  results: [],
  gameConfig: {
    mode: GAME_MODE_VARIANTS.TWO_NUMBERS,
    minNumber: 2,
    maxNumber: 9,
  },
  settings: {
    timePerQuestions: 15,
    questionCount: 10,
  },
};

export interface QuestionHistory {
  questions: Set<string>;
  lastQuestions: string[];
}

let questionHistory: QuestionHistory = {
  questions: new Set(),
  lastQuestions: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: state => {
      state.score = 0;
      state.results = [];
      state.userAnswer = '';
      state.gameState = GAME_STATE_VARIANTS.PLAYING;
      state.currentQuestion = generateQuestion(state.gameConfig, questionHistory);
      questionHistory = {
        questions: new Set(),
        lastQuestions: [],
      };
    },

    checkAnswer: state => {
      if (!state.userAnswer || !state.currentQuestion) return;

      const userAnswerNum = parseInt(state.userAnswer);
      const isCorrect = userAnswerNum === state.currentQuestion.correctAnswer;

      state.results.push({
        question: `${state.currentQuestion.num1} × ${state.currentQuestion.num2}`,
        userAnswer: userAnswerNum,
        correctAnswer: state.currentQuestion.correctAnswer,
        isCorrect,
      });

      if (isCorrect) {
        state.score += 1;
      }

      state.userAnswer = '';

      // Переход к следующему вопросу или завершение
      if (state.results.length >= state.settings.questionCount) {
        state.gameState = GAME_STATE_VARIANTS.FINISHED;
      } else {
        state.currentQuestion = generateQuestion(state.gameConfig, questionHistory);
      }
    },

    setTimeOver: state => {
      state.gameState = GAME_STATE_VARIANTS.FINISHED;
    },

    goToMainMenu: state => {
      state.gameState = GAME_STATE_VARIANTS.IDLE;
      state.userAnswer = '';
      state.results = [];
      state.score = 0;
      state.currentQuestion = null;
    },

    appendToAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer += action.payload;
    },

    backspaceAnswer: state => {
      state.userAnswer = state.userAnswer.slice(0, -1);
    },

    clearAnswer: state => {
      state.userAnswer = '';
    },

    setGameConfig: (state, action: PayloadAction<GameConfig>) => {
      state.gameConfig = action.payload;
      questionHistory = {
        questions: new Set(),
        lastQuestions: [],
      };
    },
    setTimePerQuestion: (state, action: PayloadAction<number>) => {
      state.settings.timePerQuestions = action.payload;
    },

    setQuestionCount: (state, action: PayloadAction<number>) => {
      state.settings.questionCount = action.payload;
    },
  },
});

export const {
  startGame,
  checkAnswer,
  setTimeOver,
  goToMainMenu,
  appendToAnswer,
  backspaceAnswer,
  clearAnswer,
  setGameConfig,
  setTimePerQuestion,
  setQuestionCount,
} = gameSlice.actions;

export default gameSlice.reducer;
