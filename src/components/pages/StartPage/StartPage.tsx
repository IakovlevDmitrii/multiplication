import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DifficultyButtons from '../../DifficultyButtons/DifficultyButtons';
import type { OutletContext } from '../../../types';
import styles from './StartPage.module.scss';

const StartPage: React.FC = (): React.JSX.Element => {
	const { onStartGame } = useOutletContext<OutletContext>();

	return (
		<div className={styles.startScreen}>
			<h2>Выбери уровень сложности:</h2>
			<DifficultyButtons />
			<button
				className={styles.startBtn}
				onClick={onStartGame}
			>
				Начать игру
			</button>
		</div>
	);
};

export default StartPage;