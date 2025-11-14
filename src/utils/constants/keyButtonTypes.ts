export const KEY_BUTTON_TYPES = {
  NUMBER: 'number',
  BACKSPACE: 'backspace',
  CLEAR: 'clear',
} as const;

export type KeyButtonType = typeof KEY_BUTTON_TYPES[keyof typeof KEY_BUTTON_TYPES];