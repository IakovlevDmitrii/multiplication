export const GAME_BUTTON_TYPES = {
  ANSWER: 'answer',
  HOME: 'home',
  PLAY_AGAIN: 'play-again',
  START: 'start',
} as const;

export type GameButtonType = typeof GAME_BUTTON_TYPES[keyof typeof GAME_BUTTON_TYPES];