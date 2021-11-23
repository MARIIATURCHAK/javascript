// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numMin = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// numMin(100, 105, 25 )

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numMax = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b> a && b > c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// numMax(115, 250, 35)

// - створити функцію яка повертає найбільше число з масиву
// let arrayMax = [-100, 800, 1993, -10];
// let maxArray = (array) => {
//     let max = array[0];
//     for (const el of array) {
//         if (el > max) {
//             max = el;
//         }
//     }
//     return max
// }
// console.log(maxArray(arrayMax))

// - створити функцію яка повертає найменьше число з масиву
// let arrayMin = [-70, 15, 25, 35, 45];
// let minArray = (array) => {
//     let min = array[0];
//     for (const el of array) {
//         if (el < min) {
//             min = el;
//     }
//     }
//     return min;
// }
// console.log(minArray(arrayMin))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 3, 4];
// let sumElement = (array2) => {
//     let sum = 0;
//     for (const arrayElement of array2) {
//         sum += arrayElement;
//         // or
//         // sum = sum + arrayElement;
//     }
//     return sum;
// }
// console.log(sumElement(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrayMiddle = [10, 15, 50];
// let middleArray = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return sum/array.length;
// }
// console.log(middleArray(arrayMiddle))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let fun = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const el of arg) {
//         if ( el < min) {
//             min = el;
//     } if (el > max) {
//             max = el;
//         }
//     }
//     console.log(max)
//     return min;
// }
// or
// console.log(fun(10, 15, 25, 35, -7))
// let fun2 = (...arg) => {
//     let max = arg[0];
//     let min = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//        if (max > arg[i]) {
//            max = arg[i];
//        }
//        if (min < arg[i]) {
//            min = arg[i]
//        }
//     }
//     console.log(max);
//     return min;
// }
// console.log(fun2(10,15,25,35,45))



// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].



