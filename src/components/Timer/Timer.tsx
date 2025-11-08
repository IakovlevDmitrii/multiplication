import { FC, JSX } from "react";
import formatTime	from '../../utils/formatTime';
import './Timer.module.scss';

const Timer: FC<{
	timeLeft: number;
}> = (
	{ timeLeft }: {timeLeft: number}
): JSX.Element => (
	<div>
		Время: <span className="time">{formatTime(timeLeft)}</span>
	</div>
);

export default Timer;