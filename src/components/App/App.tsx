import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import GamePage from '../GamePage/GamePage';
import DIFFICULTY_LEVELS from '../../utils/constants';
import { Question, GameResult, GameState, Difficulty } from '../../types';
import './App.scss';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [results, setResults] = useState<GameResult[]>([]);

  // Генерация случайного вопроса
  const generateQuestion = useCallback(() => {
    const maxNum = DIFFICULTY_LEVELS[difficulty].maxNumber;
    const num1 = Math.floor(Math.random() * maxNum) + 2;
    const num2 = Math.floor(Math.random() * maxNum) + 2;
    setCurrentQuestion({
      num1,
      num2,
      correctAnswer: num1 * num2
    });
  }, [difficulty]);

  // Начало игры
  const startGame = () => {
    const { time } = DIFFICULTY_LEVELS[difficulty];
    setTimeLeft(time);
    setScore(0);
    setResults([]);
    setUserAnswer('');
    setGameState('playing');
    generateQuestion();
  };

  // Проверка ответа
  const checkAnswer = useCallback(() => {
    if (!userAnswer || !currentQuestion) return;

    const userAnswerNum = parseInt(userAnswer);
    const isCorrect = userAnswerNum === currentQuestion.correctAnswer;

    const result: GameResult = {
      question: `${currentQuestion.num1} × ${currentQuestion.num2}`,
      userAnswer: userAnswerNum,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect
    };

    setResults(prev => [...prev, result]);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Переход к следующему вопросу или завершение
    if (results.length + 1 >= DIFFICULTY_LEVELS[difficulty].questions) {
      setGameState('finished');
    } else {
      setUserAnswer('');
      generateQuestion();
    }
  }, [userAnswer, currentQuestion, results.length, difficulty, generateQuestion]);

  // Таймер
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

   // Добавление цифры с клавиатуры
  const handleNumberClick = (number: string): void => {
    setUserAnswer(prev => prev + number);
  };

  // Удаление последней цифры
  const handleBackspace = (): void => {
    setUserAnswer(prev => prev.slice(0, -1));
  };

  // Очистка поля
  const handleClear = (): void => {
    setUserAnswer('');
  };

  // Обработчик физической клавиатуры
  const handleKeyPress = useCallback((e: KeyboardEvent): void => {
    if (gameState !== 'playing') return;

    if (e.key >= '0' && e.key <= '9') {
      setUserAnswer(prev => prev + e.key);
    } else if (e.key === 'Backspace') {
      handleBackspace();
    } else if (e.key === 'Enter') {
      checkAnswer();
    }
  }, [gameState, checkAnswer]);

  // Подписка на события клавиатуры
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const progress = results.length;

  return (
     <div className="app">
       <Header gameState={gameState} timeLeft={timeLeft} difficulty={difficulty} />

       <main className="main-content">
         {gameState === 'idle' && (
            <StartPage difficulty={difficulty} setDifficulty={setDifficulty} startGame={startGame} />
         )}

         {gameState === 'playing' && currentQuestion && (
            <GamePage
               progress={progress}
               difficulty={difficulty}
               score={score}
               currentQuestion={currentQuestion}
               userAnswer={userAnswer}
               handleNumberClick={handleNumberClick}
               handleClear={handleClear}
               handleBackspace={handleBackspace}
               checkAnswer={checkAnswer}
            />
         )}

         {gameState === 'finished' && (
            <div className="results-screen">
              <h2>Игра завершена!</h2>
              <div className="final-score">
                Правильных ответов: {score} из {results.length}
              </div>
              <div className="accuracy">
                Точность: {Math.round((score / results.length) * 100)}%
              </div>

              <div className="results-list">
                <h3>Результаты:</h3>
                {results.map((result, index) => (
                   <div
                      key={index}
                      className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}
                   >
                     <span className="question-text">{result.question}</span>
                     <span className="answer-text">
                    Ваш ответ: {result.userAnswer}
                       {!result.isCorrect && (
                          <span className="correct-answer">
                        Правильно: {result.correctAnswer}
                      </span>
                       )}
                  </span>
                   </div>
                ))}
              </div>

              <button className="restart-btn" onClick={() => {
                setGameState('idle');
                setUserAnswer(''); // Очищаем поле ввода при возврате в меню
              }}>
                Играть снова
              </button>
            </div>
         )}
       </main>
     </div>
  );
}

export default App;