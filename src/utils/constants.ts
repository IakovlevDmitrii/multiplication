import {DifficultyLevels} from "../types";

const DIFFICULTY_LEVELS: DifficultyLevels = {
	easy: { time: 300, questions: 5, maxNumber: 5 },
	medium: { time: 240, questions: 10, maxNumber: 9 },
	hard: { time: 180, questions: 15, maxNumber: 12 }
};

export default DIFFICULTY_LEVELS;