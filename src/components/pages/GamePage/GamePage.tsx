import React, { useCallback, useEffect } from 'react';
import VirtualKeyboard from '../../VirtualKeyboard/VirtualKeyboard';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { appendToAnswer, backspaceAnswer, checkAnswer } from '../../../store/gameSlice';
import DIFFICULTY_LEVELS from '../../../utils/constants';
import type { DifficultyLevel } from '../../../types';
import styles from './GamePage.module.scss';

const GamePage: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const {
		currentQuestion,
		userAnswer,
		score,
		gameState,
		difficulty,
		results
	} = useAppSelector((state) => state.game);
	const progress = results.length + 1;
	const currentDifficultyConfig: DifficultyLevel = DIFFICULTY_LEVELS[difficulty];

	const handleKeyPress = useCallback((e: KeyboardEvent): void => {
		if (gameState !== 'playing') return;

		if (e.key >= '0' && e.key <= '9') {
			dispatch(appendToAnswer(e.key));
		} else if (e.key === 'Backspace') {
			dispatch(backspaceAnswer());
		} else if (e.key === 'Enter') {
			e.preventDefault();

			if (userAnswer.trim() !== '') {
				setTimeout(() => {
					dispatch(checkAnswer());
				}, 10);
			}
		}
	}, [gameState, userAnswer, dispatch]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [handleKeyPress]);

	return (
		<div className={styles.gameScreen}>
			<div className={styles.progress}>
				Вопрос {progress} из {currentDifficultyConfig.questions}
				<div className="score">Счет: {score}</div>
			</div>

			<div className="question-section">
				<div className={styles.question}>
					{currentQuestion?.num1} × {currentQuestion?.num2} = ?
				</div>
				<div className={styles.answerInputSection}>
					<div className={styles.answerDisplay}>
						{userAnswer || '?'}
					</div>

					<VirtualKeyboard />
					<button
						className={styles.submitBtn}
						onClick={() => dispatch(checkAnswer())}
						disabled={!userAnswer}
					>
						Ответить
					</button>
				</div>
			</div>
		</div>
	)
};

export default GamePage;