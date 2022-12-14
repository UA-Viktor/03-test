// Напиши скрипт, который заменяет регистр 
// каждого симполва в строке на противоположный

const string = 'JavaScript';
const letters = string.split('');
let inveredString = '';
for (const letter of letters) {
    
    // Вариант 1
    // if (letter === letter.toLowerCase()) {
    //     inveredString += letter.toUpperCase();
    // } else {
    //     inveredString += letter.toLowerCase();
    // }


    // Вариант 2
    inveredString +=
        letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
    
}
console.log(inveredString);