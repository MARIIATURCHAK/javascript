// Всі функції повинні бути описані стрілочним типом!!!!
// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (number1, number2, number3) => {
//     if (number1 < number2 && number1 < number3) {
//         console.log(number1);
//     } else if (number2 < number1 && number2 < number3) {
//         console.log(number2);
//     } else if (number3 < number1 && number3 < number2) {
//         console.log(number3);
//     }
// }
// minNumber(70, 55, 100)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber = (number1, number2, number3) => {
//     if (number1 > number2 && number1 > number3) {
//         console.log(number1);
//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2);
//     } else if (number3 > number1 && number3 > number2) {
//         console.log(number3);
//     }
// }
// maxNumber(70, 55, 100)


// - створити функцію яка повертає найбільше число з масиву

// let maxarray = [-5, 40, 25, -70, 188, 99, 4];
//  let maxArray = () => {
//      let max = maxarray[0];
//      for (let arrElement of maxarray) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//      }
//     return max;
// };
// console.log(maxArray())



// - створити функцію яка повертає найменьше число з масиву

// let marray = [-5, 40, 25, -70, -188, 99, 4];
// let minArray = () => {
//     let min = marray[0];
//     for (let minElement of marray) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
// console.log(minArray())


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayMas = [1, 2, 10];
// let sumarray = () => {
//     let sum = 0;
//     for (let arrayMa of arrayMas) {
//         sum = sum + arrayMa
//     }
//     return sum
// }
// console.log(sumarray())


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let arraymid = [10, 10, 25];
// let midarray = () => {
//     let sum = null;
//     for (let el of arraymid) {
//         sum = sum + el;
//     }
//     return sum/arraymid.length;
// }
// console.log(midarray())


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let numberRandom = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//         if (max < arg[i]) {
//             max = arg[i];
//         } else if (min > arg[i]) {
//             min = arg[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(numberRandom(-7, 12, 100,300, 155));




// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let createRandom = (lenght) => {
//     let newArray = [];
//     for (let i = 0; i < lenght; i++){
//         newArray.push(Math.floor(Math.random() * 100));
//     }
//     return newArray;
// }
// console.log(createRandom(20))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let createRandom = (lenght, limit) => {
//     let newArray = [];
//     for (let i = 0; i < lenght; i++){
//         newArray.push(Math.floor(Math.random() * limit));
//     }
//     return newArray;
// }
// console.log(createRandom(20, 500))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]..
//
// let array =  [1, 2, 3];
// let reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         newArr.push(arrElement);
//     }
//     return newArr;
// }
//
// console.log(reverse(array));
