export const GAME_BUTTON_VARIANTS = {
  ANSWER: 'answer',
  HOME: 'home',
  PLAY_AGAIN: 'play-again',
  START: 'start',
} as const;

export type GameButtonType = (typeof GAME_BUTTON_VARIANTS)[keyof typeof GAME_BUTTON_VARIANTS];
