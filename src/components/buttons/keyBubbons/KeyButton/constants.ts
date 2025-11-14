export const KEY_BUTTON_VARIANTS = {
  NUMBER: 'number',
  BACKSPACE: 'backspace',
  CLEAR: 'clear',
} as const;

export type KeyButtonType = typeof KEY_BUTTON_VARIANTS[keyof typeof KEY_BUTTON_VARIANTS];