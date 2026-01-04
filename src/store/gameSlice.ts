import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GAME_STATE, GAME_MODE, QUESTION_COUNTS, TIME_PER_QUESTION } from '../constants';
import { generateQuestion } from '../helpers/generateQuestion';
import { GameConfig, GameSliceState, Question, QuestionCount, TimePerQuestion } from '../types';

const initialState: GameSliceState = {
  currentQuestion: null,
  userAnswer: '',
  score: 0,
  gameState: GAME_STATE.IDLE,
  results: [],
  gameConfig: {
    mode: GAME_MODE.MULTI.MODE,
    minNumber: GAME_MODE.MULTI.INITIAL_MIN_NUMBER,
    maxNumber: GAME_MODE.MULTI.INITIAL_MAX_NUMBER,
  },
  settings: {
    questionCount: QUESTION_COUNTS[0].value,
    timePerQuestion: TIME_PER_QUESTION[0].value,
  },
};

export interface QuestionHistory {
  questions: Set<string>;
  lastQuestions: string[];
  questionQueue: Question[];
}

let questionHistory: QuestionHistory = {
  questions: new Set(),
  lastQuestions: [],
  questionQueue: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: state => {
      state.score = 0;
      state.results = [];
      state.userAnswer = '';
      state.gameState = GAME_STATE.PLAYING;
      questionHistory = {
        questions: new Set(),
        lastQuestions: [],
        questionQueue: [],
      };
      state.currentQuestion = generateQuestion(state.gameConfig, questionHistory);
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

      state.currentQuestion = generateQuestion(state.gameConfig, questionHistory);
    },

    setTimeOver: state => {
      state.gameState = GAME_STATE.FINISHED;
    },

    goToMainMenu: state => {
      state.gameState = GAME_STATE.IDLE;
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
        questionQueue: [],
      };
    },
    setTimePerQuestion: (state, action: PayloadAction<TimePerQuestion>) => {
      state.settings.timePerQuestion = action.payload;
    },

    setQuestionCount: (state, action: PayloadAction<QuestionCount>) => {
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
