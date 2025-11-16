# Проверить код без исправлений

npm run lint:check
npm run format:check

# Автоматически исправить всё

npm run code:fix

# Проверить конкретный файл

npx eslint src/components/Button.tsx
npx prettier --check src/components/Button.tsx

# Исправить конкретный файл

npx eslint src/components/Button.tsx --fix
npx prettier --write src/components/Button.tsx

Cmd + Option + L (Mac) - форматировать файл
Ctrl + Option + O (Mac) - оптимизировать импорты

---

Сценарий 1: Ежедневная разработка

# Перед коммитом

npm run code:fix

# Если есть ошибки, которые не фиксятся автоматически

npm run lint:check

# → Смотрим ошибки, исправляем вручную

# → Снова проверяем

npm run code:fix

---

Сценарий 2: Рефакторинг компонента

# Отредактировали компонент

npx prettier --write src/components/MyComponent.tsx
npx eslint src/components/MyComponent.tsx --fix

# Проверили что всё ок

npm run lint:check

---

Сценарий 3: Проверка всего проекта

# Перед PR или релизом

npm run code:check

---

Что делать с ошибками которые не фиксятся

1. Игнорирование конкретной строки
   // eslint-disable-next-line no-console
   console.log('Это действительно нужно для дебага');
   const unused = 'test'; // eslint-disable-line no-unused-vars

2. Игнорирование файла
   /_ eslint-disable _/
   // Весь файл игнорируется

3. Временное отключение правила
   /_ eslint-disable no-console _/
   console.log('debug');
   console.log('more debug');
   /_ eslint-enable no-console _/

---

Чек-лист перед коммитом

# 1. Форматируем код

npm run format

# 2. Исправляем автоматически исправимые ошибки

npm run lint

# 3. Проверяем что не осталось ошибок

npm run lint:check

# 4. Если есть ошибки - исправляем вручную

# 5. Коммитим

git add .
git commit -m "feat: add new component"

---

Husky + lint-staged (автоматизация)
Ваш pre-commit хук уже настроен! При коммите:

Автоматически форматируются измененные файлы

Проверяется линтинг

Если есть ошибки - коммит не создается

---

Итоговый workflow:
Пишете код как обычно

Сохраняете файл → Prettier форматирует автоматически

Перед коммитом → npm run code:fix

Если ошибки → исправляете вручную

Коммитите → Husky проверяет код

---

Полный процесс коммита:

1. Вы: git add . && git commit -m "message"
2. Husky: Запускает pre-commit хук
3. lint-staged: Берет файлы из staged
4. Prettier: Форматирует файлы
5. ESLint: Исправляет что может (--fix)
6. lint-staged: Добавляет изменения обратно в staged
7. Если есть НЕисправимые ошибки → ОСТАНОВКА
8. Если всё ок → коммит создается

---

Если хотите пропустить проверки:
git commit -m "message" --no-verify

---
