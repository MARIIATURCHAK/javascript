// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

// let textDisappears = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     textDisappears.style.display = 'none';
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('button');
// button.onclick = function () {
//     button.style.display = 'none';
// }
// // or
// document.getElementById('button').onclick = function () {
//     document.getElementById('button').hidden = true;
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('button').onclick = function () {
//     let age = document.getElementById('age').value;
//     {
//         if (age >= 18) {
//             alert('Welcome');
//         } else {
//             alert('Sorry, but you cannot enter')
//         }
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menuElement = document.getElementById('menu');
// let listElement = document.getElementById('list');
//
// listElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let array = [
    {title : 'lorem1', body:'lorem ipsum dolo ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit '},
    {title : 'lorem3', body:'lorem ipsum dolo sit ame'},
    {title : 'lorem4', body:'lorem ipsum sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti.'}
];
let divElements = document.createElement('div');
for (const Element of array) {
let div = document.createElement('div')
let h2 = document.createElement('h3')
let p = document.createElement('p')
let button = document.createElement('button')

        h2.innerText = Element.title;
        p.innerHTML = Element.body;
        button.innerHTML = 'Click Here';

    button.onclick = function () {
                p.classList.add('hidden');
                button.previousElementSibling.classList.add('hidden');
    }
        divElements.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(button);
}
document.body.appendChild(divElements)



