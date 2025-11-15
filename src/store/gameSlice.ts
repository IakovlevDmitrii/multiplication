import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DIFFICULTY_LEVELS, Difficulty } from '../utils/constants/difficultyLevels';
import type { GameSliceState, Question } from '../types';

const initialState: GameSliceState = {
  currentQuestion: null,
  userAnswer: '',
  score: 0,
  timeLeft: 0,
  gameState: 'idle',
  difficulty: 'medium',
  results: [],
  totalQuestions: 10,
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
      state.timeLeft = time;
      state.score = 0;
      state.results = [];
      state.userAnswer = '';
      state.gameState = 'playing';
      state.totalQuestions = questions;
      state.currentQuestion = generateQuestion(maxNumber);
    },

    setDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.difficulty = action.payload;
    },

    setUserAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = action.payload;
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
        state.gameState = 'finished';
      } else {
        const maxNumber = DIFFICULTY_LEVELS[state.difficulty].maxNumber;
        state.currentQuestion = generateQuestion(maxNumber);
      }
    },

    decrementTime: state => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
        if (state.timeLeft === 0) {
          state.gameState = 'finished';
        }
      }
    },

    goToMainMenu: state => {
      state.gameState = 'idle';
      state.userAnswer = '';
      state.results = [];
      state.score = 0;
      state.timeLeft = 0;
      state.currentQuestion = null;
    },

    resetGame: state => {
      Object.assign(state, initialState);
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
  },
});

export const {
  startGame,
  setDifficulty,
  setUserAnswer,
  checkAnswer,
  decrementTime,
  goToMainMenu,
  resetGame,
  appendToAnswer,
  backspaceAnswer,
  clearAnswer,
} = gameSlice.actions;

export default gameSlice.reducer;
