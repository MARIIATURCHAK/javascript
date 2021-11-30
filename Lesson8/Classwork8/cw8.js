// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)


let idElem = document.getElementById('main_header');
idElem.classList.add('sep-2021');
console.log(idElem);


// //
// // // b) робить шириниу елементу ul 400px

let ulColection = document.getElementsByTagName('ul');
for (const ulColectionElement of ulColection) {
    ulColectionElement.style.width = '400px';
}
//
//
// // // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
//
let linkListColection = document.getElementsByClassName('linkList');
for (const item of linkListColection) {
    item.style.width = '50%';

}
//
// // // d) отримує текст який зберігається в елементі з класом listElement2

let listColection = document.getElementsByClassName('listElement2');
for (const listElement of listColection) {
    console.log(listElement.innerText);
}
//
//
// // // e) отримує всі елементи li та змінює ім колір фону на сірий

let liColection = document.getElementsByTagName('li');
for (const liElement of liColection) {
    liElement.style.background = 'silver';
}
//
// // // f) отримує всі елементи 'a' та додає їм клас anchor
// // // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// // // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
let aColection = document.getElementsByTagName('a');
for (const aElement of aColection) {
    aElement.classList.add('anchor')
    if (aElement.innerText.includes('link3')) {
        aElement.style.fontSize = '40px';
    }
aElement.classList.add(`element_${aElement.innerText}`);

}
//
// // // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// // // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let backColor = prompt('Введіть назву кольору латинськими літерами!')
let textColor = prompt('Введіть назву кольору латинськими літерами!')
let subheaderColection = document.getElementsByClassName('sub-header');
for (const subheaderElement of subheaderColection) {
    subheaderElement.style.background=backColor;
if (subheaderElement.innerText === 'content 2 segment' ){
    subheaderElement.style.color = textColor;
}

}
//
// // // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
let text = prompt('Введіть текст!')
let content_1Colection = document.getElementsByClassName('content_1');
for (const contEl of content_1Colection) {
    contEl.innerText = text;
}

//
// // // l) отримати елементи p та змінити їм padding на 20px
//
let pColection = document.getElementsByTagName('p');
for (const pElement of pColection) {
    console.log(pElement);
    pElement.style.padding = '20px';
}

//
// // // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// //
let text2Colection = document.getElementsByClassName('text2');
for (const text2Element of text2Colection) {
    console.log(text2Element);
    text2Element.innerText = "sep-2021"
}
//
//
//
