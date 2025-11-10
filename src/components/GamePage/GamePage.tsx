import React, { FC, JSX } from 'react';
import classNames from 'classnames';
import DIFFICULTY_LEVELS from '../../utils/constants';
import { DifficultyLevel, Question } from '../../types';
import styles from './GamePage.module.scss';

const GamePage: FC<{
	progress: number;
	difficulty: string | number;
	score: number;
	currentQuestion: Question | null;
	userAnswer: string;
	handleNumberClick: (number: string) => void;
	handleClear: () => void;
	handleBackspace: () => void;
	checkAnswer: () => void;
}> = ({
	progress,
	difficulty,
	score,
	currentQuestion,
	userAnswer,
	handleNumberClick,
	handleClear,
	handleBackspace,
	checkAnswer,
 }: {
	progress: number;
	difficulty: string | number;
	score: number;
	currentQuestion: Question | null;
	userAnswer: string;
	handleNumberClick: (number: string) => void;
	handleClear: () => void;
	handleBackspace: () => void;
	checkAnswer: () => void;
}): JSX.Element => {
	const currentDifficultyConfig: DifficultyLevel = DIFFICULTY_LEVELS[difficulty];

	return (
		<div className={styles.gameScreen}>
			<div className={styles.progress}>
				Вопрос {progress + 1} из {currentDifficultyConfig.questions}
				<div className="score">Счет: {score}</div>
			</div>

			<div className="question-section">
				<div className={styles.question}>
					{currentQuestion?.num1} × {currentQuestion?.num2} = ?
				</div>
				<div className={styles.answerInputSection}>
					<div className={styles.answerDisplay}>
						{userAnswer || '?'}
					</div>
					<div className={styles.virtualKeyboard}>
						<div className={styles.keyboardRow}>
							{[1, 2, 3].map(num => (
								<button
									key={num}
									className={styles.keyBtn}
									onClick={(): void => handleNumberClick(num.toString())}
								>
									{num}
								</button>
							))}
						</div>
						<div className={styles.keyboardRow}>
							{[4, 5, 6].map(num => (
								<button
									key={num}
									className={styles.keyBtn}
									onClick={(): void => handleNumberClick(num.toString())}
								>
									{num}
								</button>
							))}
						</div>
						<div className={styles.keyboardRow}>
							{[7, 8, 9].map(num => (
								<button
									key={num}
									className={styles.keyBtn}
									onClick={(): void => handleNumberClick(num.toString())}
								>
									{num}
								</button>
							))}
						</div>
						<div className={styles.keyboardRow}>
							<button className={classNames(styles.keyBtn, styles.clearBtn)} onClick={handleClear}>
								C
							</button>
							<button className={styles.keyBtn} onClick={(): void => handleNumberClick('0')}>
								0
							</button>
							<button className={classNames(styles.keyBtn, styles.backspaceBtn)} onClick={handleBackspace}>
								⌫
							</button>
						</div>
					</div>

					<button
						className={styles.submitBtn}
						onClick={checkAnswer}
						disabled={!userAnswer}
					>
						Ответить
					</button>
				</div>
			</div>
		</div>
	)
};

export default GamePage;