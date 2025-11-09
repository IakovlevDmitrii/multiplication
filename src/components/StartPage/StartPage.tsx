import React, { FC, JSX } from 'react';
import DifficultyButtons from '../DifficultyButtons/DifficultyButtons';
import { Difficulty } from '../../types';
import styles from './StartPage.module.scss';

const StartPage: FC<{
	difficulty: Difficulty;
	setDifficulty: (level: string | number) => void;
	startGame: () => void;
}> = ({ difficulty, setDifficulty, startGame }: {
	difficulty: Difficulty;
	setDifficulty: (level: string | number) => void;
	startGame: () => void;
}): JSX.Element => (
	<div className={styles.startScreen}>
		<h2>Выберите уровень сложности:</h2>
		<DifficultyButtons difficulty={difficulty} setDifficulty={setDifficulty} />
		<button className={styles.startBtn} onClick={startGame}>
			Начать
		</button>
	</div>
);

export default StartPage;