import { ITodoItem } from './dataTypes';

const todoList: ITodoItem[] = [
    { id: 0, title: 'Купить хлеб', description: 'Сходи в магазин и купи хлеб', date: new Date('2021-03-25') },
    { id: 1, title: 'Купить кошачий корм', description: 'Зайти в зоотовары', date: new Date('2021-03-25') },
    { id: 2, title: 'Зайти на почту', description: 'Получи бандероль', date: new Date('2021-03-25') },
    { id: 3, title: 'Покормить кота', description: 'Не нуждается в пояснениях', date: new Date('2021-03-25') },
  ];

  export { todoList };