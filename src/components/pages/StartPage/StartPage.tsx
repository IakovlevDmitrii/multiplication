import React from 'react';
import DifficultyButtons from '../../DifficultyButtons/DifficultyButtons';
import StartGameButton from '../../buttons/StartGameButton/StartGameButton';
import styles from './StartPage.module.scss';

const StartPage: React.FC = (): React.JSX.Element => (
	<div className={styles.startScreen}>
		<h2>Выбери уровень сложности:</h2>
		<DifficultyButtons />
		<StartGameButton />
	</div>
);

export default StartPage;