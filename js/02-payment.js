// Подсчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120]; 
let total = 0;

// Вариант 1
// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }


// Вариант 2
for (const iterator of cart) {
    total += iterator;
}

console.log('Total:', total);