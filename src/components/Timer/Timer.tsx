import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { decrementTime } from "../../store/gameSlice";
import formatTime	from '../../utils/time';
import './Timer.module.scss';

const Timer: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const { timeLeft, gameState } = useAppSelector((state) => state.game);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (gameState === 'playing' && timeLeft > 0) {
			timer = setInterval(() => {
				dispatch(decrementTime());
			}, 1000);
		}

		return () => clearInterval(timer);
	}, [gameState, timeLeft, dispatch]);

	return (
		<div>
			Осталось: <span className="time">{formatTime(timeLeft)}</span>
		</div>
	);
};

export default Timer;