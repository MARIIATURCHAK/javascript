// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let main_headerElement = document.getElementById('main_header');
// console.log(main_headerElement);
// style = 'mon-year';
// main_headerElement.mon-year.color = 'red';


// b) робить шириниу елементу ul 400px
let ulColection = document.getElementsByTagName('ul');
console.log(ulColection);
for (const ulColectionElement of ulColection) {
    console.log(ulColectionElement);
    ulColectionElement.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElement = document.getElementsByClassName('linkList');
console.log(linkListElement);
for (const item of linkListElement) {
    console.log(item);
    item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2Element = document.getElementsByClassName('listElement2');
console.log(listElement2Element);
for (const itemElement of listElement2Element) {
    if (itemElement.innerText.includes('link2')) {
        console.log(itemElement);
    }
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let liColection = document.getElementsByTagName('li');
console.log(liColection);
for (const liElement of liColection) {
    console.log(liElement);
    liElement.style.background = 'silver';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let aColection = document.getElementsByTagName('a');
console.log(aColection);
for (const aElement of aColection) {
    console.log(aElement);
    aElement.classList.toggle('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

