// Напиши скрипт, который объеденяет все элементы массива 
// в одно строковое значение.

// Элементов может быть произвольное кол-во.
// Пусть элементы массива будут разделены запятой

// 1.For
// 2.join

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

//  Вариант 1
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);



//  Вариант 2
const string = friends.join(',');
console.log(string);