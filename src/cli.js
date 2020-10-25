import promptly from 'promptly';

// Библиотека promptly работает в асинхронном режиме который мы еще не изучали
// Для ее работы нужно выполнить две вещи:
// 1. Добавить слово async перед определением функции
// 2. Добавить слово await перед каждым вызовом метода prompt
// В остальном код совершенно обычный
export default async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log( `Hello, ${name}`);
};
