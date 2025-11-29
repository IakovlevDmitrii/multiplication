import type { GameConfig, Question } from '../types';
import { GAME_MODE_VARIANTS } from '../constants';

interface QuestionHistory {
  questions: Set<string>;
  lastQuestions: string[];
}

const questionHistory: QuestionHistory = {
  questions: new Set(),
  lastQuestions: [],
};

interface QuestionWithWeight {
  num1: number;
  num2: number;
  weight: number; // Вес вопроса (чем сложнее - тем меньше вес)
}

export const generateSmartQuestion = (gameConfig: GameConfig): Question => {
  const possibleQuestions = generatePossibleQuestions(gameConfig);

  if (possibleQuestions.length === 0) {
    // Если все вопросы использованы, сбрасываем историю
    questionHistory.lastQuestions = [];
    return generateSmartQuestion(gameConfig);
  }

  // Выбираем вопрос с учетом весов
  const question = selectWeightedQuestion(possibleQuestions);
  updateQuestionHistory(question.num1, question.num2);

  return {
    num1: question.num1,
    num2: question.num2,
    correctAnswer: question.num1 * question.num2,
  };
};

const generatePossibleQuestions = (gameConfig: GameConfig): QuestionWithWeight[] => {
  const questions: QuestionWithWeight[] = [];

  if (gameConfig.mode === GAME_MODE_VARIANTS.SINGLE_NUMBER) {
    // Для одного числа - все возможные комбинации
    for (let num2 = gameConfig.minMultiplier; num2 <= gameConfig.maxMultiplier; num2++) {
      const weight = calculateWeight(gameConfig.currentNumber, num2);
      if (!isQuestionRecentlyUsed(gameConfig.currentNumber, num2)) {
        questions.push({
          num1: gameConfig.currentNumber,
          num2,
          weight,
        });
      }
    }
  } else {
    // Для двух чисел - все возможные комбинации
    for (let num1 = gameConfig.minNumber; num1 <= gameConfig.maxNumber; num1++) {
      for (let num2 = gameConfig.minNumber; num2 <= gameConfig.maxNumber; num2++) {
        const weight = calculateWeight(num1, num2);
        if (!isQuestionRecentlyUsed(num1, num2)) {
          questions.push({ num1, num2, weight });
        }
      }
    }
  }

  return questions;
};

const calculateWeight = (num1: number, num2: number): number => {
  // Сложные вопросы (большие числа) получают меньший вес
  // Простые вопросы (маленькие числа) получают больший вес
  const difficulty = num1 * num2; // Простота - произведение чисел
  return 1 / (1 + Math.log(difficulty)); // Логарифмическое уменьшение веса
};

const selectWeightedQuestion = (questions: QuestionWithWeight[]): QuestionWithWeight => {
  const totalWeight = questions.reduce((sum, q) => sum + q.weight, 0);
  let random = Math.random() * totalWeight;

  for (const question of questions) {
    random -= question.weight;
    if (random <= 0) {
      return question;
    }
  }

  return questions[0]; // fallback
};

const isQuestionRecentlyUsed = (num1: number, num2: number): boolean => {
  const questionKey = `${num1}×${num2}`;
  const reverseKey = `${num2}×${num1}`;

  return (
    questionHistory.lastQuestions.includes(questionKey) ||
    questionHistory.lastQuestions.includes(reverseKey)
  );
};

const updateQuestionHistory = (num1: number, num2: number): void => {
  const questionKey = `${num1}×${num2}`;

  questionHistory.lastQuestions.push(questionKey);

  if (questionHistory.lastQuestions.length > 5) {
    questionHistory.lastQuestions.shift();
  }

  questionHistory.questions.add(questionKey);
};
