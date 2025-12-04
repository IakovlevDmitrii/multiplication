export const GAME_STATE = {
  IDLE: 'idle',
  PLAYING: 'playing',
  FINISHED: 'finished',
} as const;

export const GAME_MODE = {
  SINGLE_NUMBER: {
    MODE: 'single-number',
    INITIAL_SINGLE_NUMBER: 2,
    INITIAL_MIN_MULTIPLIER: 2,
    INITIAL_MAX_MULTIPLIER: 9,
  },
  TWO_NUMBERS: {
    MODE: 'two-numbers',
    INITIAL_MIN_NUMBER: 2,
    INITIAL_MAX_NUMBER: 9,
  },
} as const;

export const QUESTION_COUNTS = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
] as const;

export const TIME_PER_QUESTION = [
  { value: 6, label: '6 сек' },
  { value: 4, label: '4 сек' },
  { value: 2, label: '2 сек' },
] as const;

export const MULTIPLIERS_RANGE = Array.from({ length: 8 }, (_, i) => i + 2);
