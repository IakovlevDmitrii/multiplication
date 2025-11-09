import React, { FC, JSX } from 'react';
import DIFFICULTY_LEVELS from '../../utils/constants';
import formatTime from "../../utils/formatTime";
import { Difficulty } from '../../types';
import classNames from 'classnames';
import styles from './DifficultyButtons.module.scss';

const DifficultyButtons: FC<{
	difficulty: Difficulty;
	setDifficulty: (level: string | number) => void;
}> = ({ difficulty, setDifficulty }: {
	difficulty: Difficulty;
	setDifficulty: (level: string | number) => void;
}): JSX.Element => (
	<div className={styles.difficultyButtons}>
		{(Object.keys(DIFFICULTY_LEVELS) as Difficulty[]).map((level: string | number): JSX.Element => (
			<button
				key={level}
				className={classNames(styles.difficultyBtn, {
					[styles.active]: difficulty === level
				})}
				onClick={(): void => setDifficulty(level)}
			>
				<div className={styles.diffLevel}>{level}</div>
				<div className={styles.diffInfo}>
					{DIFFICULTY_LEVELS[level].questions} вопросов
				</div>
				<div className={styles.diffInfo}>
					{formatTime(DIFFICULTY_LEVELS[level].time)}
				</div>
			</button>
		))}
	</div>
);

export default DifficultyButtons;