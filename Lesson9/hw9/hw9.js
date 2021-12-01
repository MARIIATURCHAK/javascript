// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let div = document.createElement('div');
// div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam.'
// div.classList.add('wrap', 'collapse', 'alpha', 'beta' );
// document.body.appendChild(div);
// let cloneNode = div.cloneNode(true);
// document.body.appendChild(cloneNode)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для
// кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let array = ['Main','Products','About us','Contacts'];
//
// for (const string of array) {
//    let liElement = document.createElement('li');
//    liElement.innerText = `${string}`;
//     let ul = document.getElementsByClassName('menu');
//     ul[0].appendChild(liElement);
// }

// - Є масив

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const arrayElement of coursesAndDurationArray) {
//     let divElement = document.createElement('div')
//     divElement.innerText = `${arrayElement.title} ${arrayElement.monthDuration}`;
// document.body.appendChild(divElement);
//
// }



// - Є масив

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const arrayElement of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.classList.add('description');
//     h1.innerText = `${arrayElement.title}`;
//     p.innerText = `${arrayElement.monthDuration}`;
//
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// }