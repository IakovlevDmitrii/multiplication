import React from 'react';
import classNames from 'classnames';
import GameSummary from '../../GameSummary/GameSummaty';
import PlayAgainButton from '../../buttons/gameButtons/PlayAgainButton/PlayAgainButton';
import MainMenuButton from '../../buttons/gameButtons/MainMenuButton/MainMenuButton';
import { useAppSelector } from '../../../utils/hooks/redux';
import type { GameResult } from '../../../types';
import styles from './ResultsPage.module.scss';

const ResultsPage: React.FC = (): React.JSX.Element => {
	const { results } = useAppSelector(state => state.game);

	return (
		<div className={styles.resultsScreen}>
			<h2>Игра завершена!</h2>
			<GameSummary />
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