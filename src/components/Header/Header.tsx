import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Timer from '../Timer/Timer';
import styles from './Header.module.scss';

const Header: React.FC = (): React.JSX.Element => {
	const { gameState, difficulty } = useAppSelector(state => state.game);

	return (
		<header className={styles.header}>
			<h1>Умножение</h1>

			<div className={styles.gameInfo}>
				<div className="difficulty">
					Сложность: <span className={styles.diffBadge}>{difficulty}</span>
				</div>
				{gameState === 'playing' && <Timer />}
			</div>
		</header>
	);
};

export default Header;