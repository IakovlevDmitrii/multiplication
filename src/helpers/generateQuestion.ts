import type { GameConfig, Question } from '../types';
import type { QuestionHistory } from '../store/gameSlice';
import { GAME_MODE } from '../constants';

export const generateQuestion = (
  gameConfig: GameConfig,
  questionHistory: QuestionHistory
): Question => {
  let num1: number, num2: number;
  let attempts = 0;
  const maxAttempts = 50;

  do {
    if (gameConfig.mode === GAME_MODE.SINGLE.MODE) {
      num1 = gameConfig.currentNumber;
      num2 = getRandomNumber(gameConfig.minMultiplier, gameConfig.maxMultiplier);
    } else {
      num1 = getRandomNumber(gameConfig.minNumber, gameConfig.maxNumber);
      num2 = getRandomNumber(gameConfig.minNumber, gameConfig.maxNumber);
    }

    attempts++;

    if (attempts > maxAttempts) {
      questionHistory.lastQuestions = [];
      break;
    }
  } while (isQuestionRecentlyUsed(num1, num2, questionHistory));

  updateQuestionHistory(num1, num2, questionHistory);

  return {
    num1,
    num2,
    correctAnswer: num1 * num2,
  };
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isQuestionRecentlyUsed = (
  num1: number,
  num2: number,
  questionHistory: QuestionHistory
): boolean => {
  const questionKey = `${num1}×${num2}`;
  const reverseKey = `${num2}×${num1}`;

  return (
    questionHistory.lastQuestions.includes(questionKey) ||
    questionHistory.lastQuestions.includes(reverseKey)
  );
};

const updateQuestionHistory = (
  num1: number,
  num2: number,
  questionHistory: QuestionHistory
): void => {
  const questionKey = `${num1}×${num2}`;

  questionHistory.lastQuestions.push(questionKey);

  if (questionHistory.lastQuestions.length > 5) {
    questionHistory.lastQuestions.shift();
  }

  questionHistory.questions.add(questionKey);
};
