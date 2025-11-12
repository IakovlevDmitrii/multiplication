import React from 'react';
import Timer from '../Timer/Timer';
import { useAppSelector } from '../../hooks/redux';
import styles from './Header.module.scss';

interface HeaderProps {
	onHomeClick?: () => void;
	showHomeButton?: boolean;
}

const Header: React.FC<HeaderProps> = (
	{ onHomeClick, showHomeButton = false }
): React.JSX.Element => {
	const { gameState, difficulty } = useAppSelector((state) => state.game);

	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				{showHomeButton && (
					<button
						className={styles.homeButton}
						onClick={onHomeClick}
						title="В главное меню"
					>
						🏠
					</button>
				)}
				<h1>Умножение</h1>

				<div className={styles.gameInfo}>
					<div className="difficulty">
						Сложность: <span className={styles.diffBadge}>{difficulty}</span>
					</div>
					{gameState === 'playing' && <Timer />}
				</div>
			</div>
		</header>
	);
};

export default Header;