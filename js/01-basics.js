// const friends = ['Viktor', 'Nastya', 'Sasha', 'Inna'];
// console.log(friends);
// console.log(friends.length);
// console.table(friends);
// console.log(friends[1]);
// friends[2] = 'Nazar';
// console.table(friends);



// Передача по ссылке Часть 1 - Простые типы
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 20;
// console.log(a);
// console.log(b);


// Передача по ссылке Часть 2 - Сложные типы
// const a = [1, 2, 3];
// const b = a;
// console.log('a', a);
// console.log('b', b);
// a[0] = 500;
// console.log('a', a);
// console.log('b', b);
// console.log(a === b); // true - потому что одна и таже ссылка
// console.log([1, 2, 3] === [1, 2, 3]); // fasle - разные ссылки




// Перебор (итерация) массива
const friends = ['Viktor', 'Nastya', 'Sasha', 'Inna'];

// Вариант 1
// for (let i = 0; i < friends.length; i += 1) {
//     console.log(friends[i]);
// }

// Вариант 2
// for (const friend of friends) {
//     console.log(friend);
// }
