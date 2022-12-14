// Работаем с коллекцией карточек в trello
// Метод splice()
// Удалить 
// Добавить
// Обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];

console.table(cards);

// Удаление ПО ИНДЕКСУ метод indexOf()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// Добавление ПО ИНДЕКСУ

// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// Обновление ПО ИНДЕКСУ

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);
cards.splice(index, 1, 'Обновленная карточка-4');
console.table(cards);