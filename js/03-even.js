// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let sum = 0;

// Вариант 1
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log('Четное', numbers[i]);
//         sum += numbers[i];
//     }
// }

// Вариант 2
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log('Четное', number);
//         sum += number;
//     }
// }

// Вариант 3
for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log('Эту итерацию нужно пропустить', number);
        continue;
    }
    console.log('Четное', number);
    sum += number;
}

console.log('Sum Четких: ', sum);