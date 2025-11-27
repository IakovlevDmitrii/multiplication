export const GAME_STATE_VARIANTS = {
  IDLE: 'idle',
  PLAYING: 'playing',
  FINISHED: 'finished',
} as const;

export const GAME_MODE_VARIANTS = {
  SINGLE_NUMBER: 'single-number',
  TWO_NUMBERS: 'two-numbers',
} as const;

export const listOfMultipliers: number[] = Array.from({ length: 8 }, (_, i) => i + 2);

export const TWO_NUMBERS_MODE: { INITIAL_MIN: number; INITIAL_MAX: number } = {
  INITIAL_MIN: 2,
  INITIAL_MAX: 9,
};

export const SINGLE_NUMBER_MODE: {
  INITIAL_NUMBER: number;
  INITIAL_MIN: number;
  INITIAL_MAX: number;
} = {
  INITIAL_NUMBER: 2,
  INITIAL_MIN: 2,
  INITIAL_MAX: 9,
};
