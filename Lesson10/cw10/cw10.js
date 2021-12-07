// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку
// при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// document.getElementById('button').onclick = function () {
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// let form = document.forms['form'];
// document.getElementById('button').onclick = function () {
//     let inputOne = +form.inputOne.value;
//     let inputTwo = +form.inputTwo.value;
//     let inputThree = form.inputThree.value;
//     console.log(inputOne, inputTwo, inputThree)
//
//     let table = document.createElement('table');
//
//     for (let i = 0; i < inputOne; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < inputTwo; j++) {
//                 let td = document.createElement('itd');
//                 td.innerText = inputThree;
//                 tr.appendChild(td);
//         }
//        table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// };
//
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let badWords = ['дурень', 'сука', 'блять'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Check bad words';
// document.body.append(input, button);
//
// button.addEventListener('click', function () {
//     let valueInput = input.value;
//
//     for (let badWord of badWords) {
//         if (badWord === valueInput) {
//             alert('You wrote a bad word');
//             return;
//         }
//     }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['дурень', 'сука', 'блять'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Check bad words';
// document.body.append(input, button);
//
// button.addEventListener('click', function () {
//     let sentense = input.value;
//
//     for (let badWord of badWords) {
//         if (sentense.includes(badWord)) {
//             alert('You wrote a bad word');
//             return;
//         }
//     }
// })
