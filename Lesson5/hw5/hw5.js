// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

  // let arearectangle = (a, b) => a * b;
  //   console.log(arearectangle (5, 5));

// - створити функцію яка обчислює та повертає площу кола

// let areacircle = (r, PI) => r ** 2 * PI;
// console.log(areacircle(6, 3.14));

// - створити функцію яка обчислює та повертає площу циліндру
// S = 2 π R (R + h)
//
// let areacylinder = (a, Pi, r, r2, h) => a * Pi * r * (r2 + h);
// console.log(areacylinder(2, 3.14, 10, 10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['zero', true, 'two', 3, 'four', false, 6, 'seven', 8, true];
// let dataarray = arr => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// };
// dataarray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let dataparagraph = (a) => {
//     document.write(`<p>${a}</p>`)
// }
// dataparagraph ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo molestiae qui reprehenderit?')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let unorderedlist = (a) => {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// unorderedlist("item")

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let unorderedlist = (a, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// unorderedlist("item", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = ['zero', true, 'two', 3, 'four', false, 6, 'seven', 8, true];
// let dataarray = arr => {
//     for (let a = 0; a < arr.length; a++) {
//         document.write(`<li>${arr[a]}</li>`);
//     }
// };
// dataarray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let simpson = [
//     {
//         id: 1,
//         name: 'Bart',
//         age: 10
//    },
//     {
//        id: 2,
//         name: 'Homer',
//         age: 40
//     },
//     {
//        id: 3,
//         name: 'Marge',
//         age: 38
//
//     },
// ];
// let object = (simpsons) => {
//     for (let simpson of simpsons) {
//     document.write(`<div>
//     ${simpson.id}
//     ${simpson.name} -
//     ${simpson.age} </div>`)
//     }
// }
// object(simpson);
