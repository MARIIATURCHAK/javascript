// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function arearectangle (a, b) {
//     let s = a * b;
//         return s;
//     }
//     console.log(arearectangle (5, 5))



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// //
// function areacircle (r){
//     let radius = r ** 2;
//     const Pi = 3.14;
//     let circle = Pi * radius;
//     return circle;
// }
// console.log((areacircle(6)))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S = 2 π R (R + h)

// function areacylinder (r, h){
//     const Pi = 3.14;
//     let circle = 2 * Pi * r *(r + h);
//     return circle;
// }
// console.log((areacylinder(10, 5)))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['zero', true, 'two', 3, 'four', false, 6, 'seven', 8, true];
// function dataarray(array) {
//     for (let a = 0; a < array.length; a++) {
//         console.log((array[a]));
//     }
// }
// dataarray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function dataparagraph(a) {
//     document.write(`<p>${a}</p>`)
// }
//
// dataparagraph ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo molestiae qui reprehenderit?')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function unorderedlist (a) {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// unorderedlist('Item')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається другим аргументом,який є числовим (тут використовувати цикл)

// function unorderedlist (a, size) {
//     document.write(`<ul>`)
//     for (let i=0; i < size; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// unorderedlist('Item', 3)
//

//  -створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = ['zero', true, 'two', 3, 'four', false, 6, 'seven', 8, true];
// function dataarray(arr) {
//     for (let a = 0; a < arr.length; a++) {
//         document.write(`<li>${arr[a]}</li>`);
//     }
// }
// dataarray(array)




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
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
// function object(simpsons) {
//     for (const simpson of simpsons) {
//     document.write(`<div>
//     ${simpson.id}
//     ${simpson.name} -
//     ${simpson.age} </div>`)
//     }
// }
// object(simpson);