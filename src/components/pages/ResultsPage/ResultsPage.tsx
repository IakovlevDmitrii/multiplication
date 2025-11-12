import React from 'react';
import classNames from 'classnames';
import PlayAgainButton from '../../buttons/PlayAgainButton/PlayAgainButton';
import MainMenuButton from '../../buttons/MainMenuButton/MainMenuButton';
import { useAppSelector } from '../../../hooks/redux';
import type { GameResult } from '../../../types';
import styles from './ResultsPage.module.scss';

const ResultsPage: React.FC = (): React.JSX.Element => {
	const { score, results } = useAppSelector((state) => state.game);

	return (
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
				{results.map((result: GameResult, index): React.JSX.Element => (
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

			<div className={styles.resultButtons}>
				<PlayAgainButton />
				<MainMenuButton />
			</div>
		</div>
	);
};

export default ResultsPage;