import React from 'react';
import DifficultyButtons from '../../DifficultyButtons/DifficultyButtons';
import { useAppDispatch } from '../../../hooks/redux';
import { startGame } from '../../../store/gameSlice';
import styles from './StartPage.module.scss';

const StartPage: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.startScreen}>
			<h2>Выбери уровень сложности:</h2>
			<DifficultyButtons />
			<button
				className={styles.startBtn}
				onClick={() => dispatch(startGame())}
			>
				Начать игру
			</button>
		</div>
	);
};

export default StartPage;