import type { GameConfig, Question } from '../types';
import type { QuestionHistory } from '../store/gameSlice';
import { GAME_MODE } from '../constants';

export const generateQuestion = (
  gameConfig: GameConfig,
  questionHistory: QuestionHistory
): Question => {
  // Если в очереди мало вопросов (<3) - пополняем ее
  if (questionHistory.questionQueue.length < 3) {
    replenishQuestionQueue(gameConfig, questionHistory);
  }

  // Берем следующий вопрос из очереди
  const nextQuestion = questionHistory.questionQueue.shift()!;

  // Обновляем историю
  updateQuestionHistory(nextQuestion.num1, nextQuestion.num2, questionHistory);

  return nextQuestion;
};

// Пополнение очереди вопросов
const replenishQuestionQueue = (gameConfig: GameConfig, questionHistory: QuestionHistory): void => {
  // Генерируем все возможные вопросы для текущего конфига
  const allPossibleQuestions = generateAllPossibleQuestions(gameConfig);

  // Фильтруем уже использованные в этой сессии
  const unusedQuestions = allPossibleQuestions.filter(q => {
    const key = `${q.num1}×${q.num2}`;
    return !questionHistory.questions.has(key);
  });

  if (unusedQuestions.length > 0) {
    // Есть неиспользованные вопросы - берем их
    const questionsToAdd = selectQuestions(unusedQuestions, 10); // Берем до 10 вопросов
    shuffleArray(questionsToAdd);
    questionHistory.questionQueue.push(...questionsToAdd);
  } else {
    // Все комбинации использованы - сбрасываем историю и начинаем заново
    questionHistory.questions.clear();

    // Берем все вопросы снова
    const questionsToAdd = selectQuestions(allPossibleQuestions, 10);
    shuffleArray(questionsToAdd);
    questionHistory.questionQueue.push(...questionsToAdd);
  }
};

// Генерация всех возможных вопросов для конфига
const generateAllPossibleQuestions = (gameConfig: GameConfig): Question[] => {
  const questions: Question[] = [];

  if (gameConfig.mode === GAME_MODE.SINGLE.MODE) {
    // SINGLE: фиксированный множитель × все из диапазона
    const fixedNum = gameConfig.currentNumber;
    for (let i = gameConfig.minMultiplier; i <= gameConfig.maxMultiplier; i++) {
      questions.push({
        num1: fixedNum,
        num2: i,
        correctAnswer: fixedNum * i,
      });
    }
  } else {
    // MULTI: все комбинации от minNumber до maxNumber
    // Учитываем коммутативность (2×3 = 3×2) - храним только одну версию
    for (let i = gameConfig.minNumber; i <= gameConfig.maxNumber; i++) {
      for (let j = i; j <= gameConfig.maxNumber; j++) {
        questions.push({
          num1: i,
          num2: j,
          correctAnswer: i * j,
        });
      }
    }
  }

  return questions;
};

// Выбор N вопросов из массива (если нужно меньше чем есть)
const selectQuestions = (questions: Question[], count: number): Question[] => {
  if (questions.length <= count) {
    return [...questions];
  }

  // Выбираем случайные вопросы
  const shuffled = [...questions];
  shuffleArray(shuffled);
  return shuffled.slice(0, count);
};

// Перемешивание массива (алгоритм Фишера-Йетса)
const shuffleArray = <T>(array: T[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Обновление истории (добавляем в использованные и в последние)
const updateQuestionHistory = (
  num1: number,
  num2: number,
  questionHistory: QuestionHistory
): void => {
  const questionKey = `${num1}×${num2}`;

  // Добавляем в использованные
  questionHistory.questions.add(questionKey);

  // Добавляем в последние (кольцевой буфер на 5 элементов)
  questionHistory.lastQuestions.push(questionKey);
  if (questionHistory.lastQuestions.length > 5) {
    questionHistory.lastQuestions.shift();
  }
};
