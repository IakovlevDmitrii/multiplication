import React from 'react';
import HomeButton from '../buttons/HomeButton/HomeButton';
import DifficultyBar from '../DifficultyBar/DifficultyBar';
import styles from './Header.module.scss';

interface HeaderProps {
	showHomeButton?: boolean;
}

const Header: React.FC<HeaderProps> = (
	{ showHomeButton = false }
): React.JSX.Element => {

	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				{showHomeButton && <HomeButton />}
				<h1>Умножение</h1>
				<div className={styles.gameInfo}>
					<DifficultyBar />
				</div>
			</div>
		</header>
	);
};

export default Header;