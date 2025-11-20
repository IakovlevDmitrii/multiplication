import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DIFFICULTY_LEVELS, Difficulty } from '../utils/constants/difficultyLevels';
import { GAME_STATE_VARIANTS } from '../utils/constants';
import type { GameSliceState } from '../types/redux-state';
import type { Question } from '../types/game';

const initialState: GameSliceState = {
  currentQuestion: null,
  userAnswer: '',
  score: 0,
  gameState: GAME_STATE_VARIANTS.IDLE,
  difficulty: 'medium',
  results: [],
  totalQuestions: DIFFICULTY_LEVELS.medium.questions,
  totalTime: DIFFICULTY_LEVELS.medium.time,
};

const generateQuestion = (maxNumber: number): Question => {
  const num1 = Math.floor(Math.random() * maxNumber) + 2;
  const num2 = Math.floor(Math.random() * maxNumber) + 2;
  return {
    num1,
    num2,
    correctAnswer: num1 * num2,
  };
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: state => {
      const { time, questions, maxNumber } = DIFFICULTY_LEVELS[state.difficulty];
      state.totalTime = time;
      state.score = 0;
      state.results = [];
      state.userAnswer = '';
      state.gameState = GAME_STATE_VARIANTS.PLAYING;
      state.totalQuestions = questions;
      state.currentQuestion = generateQuestion(maxNumber);
    },

    setDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.difficulty = action.payload;
      state.totalTime = DIFFICULTY_LEVELS[action.payload].time;
      state.totalQuestions = DIFFICULTY_LEVELS[action.payload].questions;
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
      if (state.results.length >= state.totalQuestions) {
        state.gameState = GAME_STATE_VARIANTS.FINISHED;
      } else {
        const maxNumber = DIFFICULTY_LEVELS[state.difficulty].maxNumber;
        state.currentQuestion = generateQuestion(maxNumber);
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

    // resetGame: state => {
    //   Object.assign(state, initialState);
    // },

    appendToAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer += action.payload;
    },

    backspaceAnswer: state => {
      state.userAnswer = state.userAnswer.slice(0, -1);
    },

    clearAnswer: state => {
      state.userAnswer = '';
    },
  },
});

export const {
  startGame,
  setDifficulty,
  checkAnswer,
  setTimeOver,
  goToMainMenu,
  appendToAnswer,
  backspaceAnswer,
  clearAnswer,
} = gameSlice.actions;

export default gameSlice.reducer;
