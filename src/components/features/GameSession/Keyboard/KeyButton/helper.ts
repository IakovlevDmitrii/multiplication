import React from 'react';

export const getAriaLabel = (keyType: string, children: React.ReactNode): string => {
  switch (keyType) {
    case 'number':
      return `Цифра ${children}`;
    case 'clear':
      return 'Очистить';
    case 'backspace':
      return 'Удалить символ';
    case 'submit':
      return 'Отправить ответ';
    default:
      return 'Кнопка';
  }
};
