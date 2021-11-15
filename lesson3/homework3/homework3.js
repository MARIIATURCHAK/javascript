// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [15, 45, 23, 64, 26];
// let str = ['a', 'b', 'c', 'd', 'e'];
// let dif = ['k', 17, 'p', 2, true];
// console.log(num);
// console.log(str);
// console.log(dif);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'if';
// arr[1] = 'i';
// arr[2] = 'understood';
// arr[3] = 'correctly';
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>item</div>');
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>item ${i}</div>`);
// }

// / - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// i = 0;
// while (i < 20) {
//     document.write('<h1>Text</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// i = 0;
// while (i < 20) {
//     document.write(`<h1>Text ${i}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < 10; i++) {
//     console.log(num[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// for (i = 0; i < 10; i++) {
//     console.log(str[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let dif = ['zero', true, 'two', 3, 'four', 'five', 6, 'seven', 8, 'nine'];
// for (i = 0; i < 10; i++) {
//     console.log(dif[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let r = ['zero', true, 'two', 3, 'four', false, 6, 'seven', 8, true];
// for (let i = 0; i < 10; i++) {
//     if (typeof r[i] === "boolean") {
//         console.log(r[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let n = ['zero', true, 'two', 3, 'four', false, 6, 'seven', 8, true];
// for (let i = 0; i < 10; i++) {
//     if (typeof n[i] === "number") {
//         console.log(n[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let s = ['how', true, 'are', 3, 'you', false, 6, '???', 8, true];
// for (let i = 0; i < 10; i++) {
//     if (typeof s[i] === "string") {
//         console.log(s[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = true;
// array[1] = 'what';
// array[2] = 26;
// array[3] = 'do';
// array[4] = 'you';
// array[5] = 8;
// array[6] = false;
// array[7] = 'do';
// array[8] = 1993;
// array[9] = true;
// for(let i = 0; i < 10; i++) {
//     console.log(array[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`<div>item ${i}</div>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`<div>item ${i}</div>`);
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i=i+2) {
//     console.log(i-1)
//     document.write(`<div>Цикл ${i-1}</div>`);
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log(i)
//     document.write(`<div>Цикл ${i}</div>`);
// }
// or

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//         document.write(`<div>Цикл or ${i}</div>`);
//     }
// }


// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i=i+2) {
//     console.log(i)
//     document.write(`<div>Цикл ${i}</div>`);
// }

// or

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//         document.write(`<div>Цикл or ${i}</div>`);
//     }
// }
