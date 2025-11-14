import React from 'react';
import HomeButton from '../buttons/HomeButton/HomeButton';
import { useAppSelector } from '../../utils/hooks/redux';
import styles from './Header.module.scss';

interface HeaderProps {
	showHomeButton?: boolean;
}

const Header: React.FC<HeaderProps> = (
	{ showHomeButton = false }
): React.JSX.Element => {
	const { difficulty } = useAppSelector(state => state.game);

	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				{showHomeButton && <HomeButton />}
				<h1>Умножение</h1>
				<div className={styles.gameInfo}>
					<div className="difficulty">
						Сложность: <span className={styles.diffBadge}>{difficulty}</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;