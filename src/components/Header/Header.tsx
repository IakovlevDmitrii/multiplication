import React, { FC, JSX } from 'react';
import Timer from "../Timer/Timer";
import { GameState, Difficulty } from '../../types';
import styles from './Header.module.scss';

const Header: FC<{
	gameState: GameState;
	timeLeft: number;
	difficulty: Difficulty;
}> = ({
		gameState,
		timeLeft,
		difficulty,
	}: {
	gameState: GameState;
	timeLeft: number;
	difficulty: Difficulty
}): JSX.Element => (
	<header className={styles.appHeader}>
		<h1>Умножение</h1>
		<div className={styles.gameInfo}>
			<div className="difficulty">
				Сложность: <span className={styles.diffBadge}>{difficulty}</span>
			</div>
			{gameState === 'playing' && <Timer timeLeft={timeLeft} />}
		</div>
	</header>
);

export default Header;