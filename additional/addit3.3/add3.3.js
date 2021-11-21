// 1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 2; i <= 100; i= i+2) {
//     arr[i] = i;
// }
//
// console.log(arr);
//

// b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 1; i < 100; i += 2) {
//     arr[i] = i;
// }
//
// console.log(arr);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr3 = [];
//
// for (let i = 1; i<20; i++ ) {
//     arr3[i] = Math.floor(Math.random() * 1000);
// }
// console.log(arr3)


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr3 = [];
//
// for (let i = 0; i<10; i++ ) {
//     arr3[i] = (Math.floor(Math.random() * 732)+8);
// }
// console.log(arr3)


// 2. Вивести за допомогою console.log кожен третій елемен
// let arr = [8, 2, 3, 5, 7, 26, 56, 8, 68, 10, 15, 14, ];
// for ( i = 2; i < arr.length; i += 3 ) {
//         console.log(arr[i])
//
//     }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [ 1, 2, 3, 5, 7, 26, 56, 8, 68, 10, 15];
// for ( i = 2; i < arr.length; i += 3 ) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [ 1, 2, 3, 5, 7, 26, 56, 8, 68, 10, 15];
// let arr2 = [];
// for ( i = 2; i < arr.length; i += 3 ) {
//     if (arr[i] % 2 === 0) {
//         arr2.push(arr[i]);
//
//     }
// }
// console.log(arr2);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2===0) {
//         console.log(arr[i-1])
//
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let array = [100,250,50,168,120,345,188];
let sum = 0;
for (i=0; i < array.length; i++) {
        sum = sum + array[i];
    }
    sum = sum / array.length;
    console.log(sum)



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// array = [100,250,50,168,120,345,188];
// let array2 = [];
// for (i = 0; i < array.length; i++){
//     array2.push(array[i] *5);
// }
// console.log(massiv2)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// array = ['okten', 'hello', 26, true, 'smile', 2, false];
// array2 = []
// for (let i = 0; i < array.length; i++) {
// if (typeof array[i] === "number") {
//     array2.push(array[i])
// }
// }
// console.log(array2)
