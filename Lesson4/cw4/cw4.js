// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber (number1, number2, number3) {
//     if (number1 < number2 && number1 < number3) {
//         console.log(number1);
//     } else if (number2 < number1 && number2 < number3) {
//         console.log(number2);
//     } else if (number3 < number1 && number3 < number2) {
//         console.log(number3);
//     }
// }
// minNumber(70, 55, 40)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maxNumber (number1, number2, number3) {
// if (number1 > number2 && number1 > number3) {
//         console.log(number1);
//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2);
//     } else if (number3 > number1 && number3 > number2) {
//         console.log(number3);
//     }
// }
// maxNumber(702, 555, 840)

// - створити функцію яка повертає найбільше число з масиву
//
// let maxarray = [-5, 40, 25, -70, 88, 99, 4];
//
// function maxArray() {
//     let max = maxarray[0];
//     for (const arrElement of maxarray) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//     }
//     return max;
// };
// console.log(maxArray())


// - створити функцію яка повертає найменьше число з масиву
// let marray = [-5, 40, 25, -70, 88, 99, 4];
//
// function minArray() {
//     let min = marray[0];
//     for (const arrElement of marray) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// };
// console.log(minArray())

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayMas = [26, 8, 93];
//
// function sumarray(array) {
//     let sum = 0;
//     for (let el of array) {
//         sum = sum + el;
//     }
//     return sum;
// }
// console.log(sumarray(arrayMas))

//
// let arrayMas = [2, 8, 1];
// function sumarray() {
//     let sum = 0;
//     for (let el of arrayMas) {
//         sum = sum + el;
//     }
//     return sum;
// }
// console.log(sumarray())


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arraymid = [10, 10, 100];
//
// function middle(arr) {
//     let sum = null;
//     for (let el of arr) {
//         sum = sum + el / arr.length;
//     }
//     return sum;
// }
//
// console.log(middle(arraymid));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numberRandom() {
    let max = null;
    let min = null;
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        } else if (min > arguments[i]) {
            min = arguments[i];
        }

    }
    console.log(max);
    return min
}

console.log(numberRandom(-7, 12, 100,300));;
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(size) {
//     for (let i = 0; i < length; i++) {
//         Math.round(Math.random() * 100)
//     }
// }
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
