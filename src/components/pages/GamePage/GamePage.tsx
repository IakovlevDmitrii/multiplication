import React, { useEffect, useCallback } from 'react';
import ProgressBars from '../../ProgressBars/ProgressBars';
import Example from '../../Example/Example';
import VirtualKeyboard from '../../VirtualKeyboard/VirtualKeyboard';
import AnswerButton from '../../buttons/gameButtons/AnswerButton/AnswerButton';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks/redux';
import { appendToAnswer, backspaceAnswer, checkAnswer } from '../../../store/gameSlice';
import styles from './GamePage.module.scss';

const GamePage: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const {
		userAnswer,
		gameState,
	} = useAppSelector(state => state.game);

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
		<div className={styles.gamePage}>
			<ProgressBars />
			<div className={styles.questionSection}>
				<Example />
				<VirtualKeyboard />
				<AnswerButton />
			</div>
		</div>
	);
};

export default GamePage;