import React, { FC, JSX } from 'react';
import classNames from 'classnames';
import type { GameResult, GameState } from '../../../types';
import styles from './ResultsPage.module.scss';

const ResultsPage: FC<{
	score: number;
	results: GameResult[];
	setGameState: (state: GameState) => void;
	setUserAnswer: (answer: string) => void;
}> = ({
	score,
	results,
	setGameState,
	setUserAnswer,
}: {
	score: number;
	results: GameResult[];
	setGameState: (state: GameState) => void;
	setUserAnswer: (answer: string) => void;
}): JSX.Element => (
	<div className={styles.resultsScreen}>
		<h2>Игра завершена!</h2>
		<div className={styles.finalScore}>
			<span>Правильных ответов:</span>
			<div>
				{score} из {results.length}
			</div>
		</div>
		<div className={styles.accuracy}>
			Точность: {Math.round((score / results.length) * 100)}%
		</div>

		<div className={styles.resultsList}>
			<h3>Результаты:</h3>
			{results.map((result: GameResult, index): JSX.Element => (
				<div
					key={index}
					className={classNames(styles.resultItem, {
						[styles.correct]: result.isCorrect,
						[styles.incorrect]: !result.isCorrect,
					})}
				>
					<span className={styles.questionText}>{result.question}</span>
					<span className={styles.answerText}>
                    Ваш ответ: {result.userAnswer}
						{!result.isCorrect && (
							<span className={styles.correctAnswer}>
                        Правильно: {result.correctAnswer}
                      </span>
						)}
                  </span>
				</div>
			))}
		</div>

		<button className={styles.restartBtn} onClick={() => {
			setGameState('idle');
			setUserAnswer('');
		}}>
			Играть снова
		</button>
	</div>
);

export default ResultsPage;