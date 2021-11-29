// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або  document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contentElement = document.getElementById('content');
console.log(contentElement)
// -- отримує текст з блоку з id "rules"
let rulesElement = document.getElementById('rules');
console.log(rulesElement)
// -- замініть текст параграфа з id 'content' на будь-який інший
contentElement.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae iure, minima.";
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesElement.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae iure, minima. Commodi deleniti eaque ipsa ipsam minima officia quibusdam vel.";
// -- змініть кожному елементу колір фону на червоний
contentElement.style.background = 'red';
rulesElement.style.background = 'red';


let ulColection = document.getElementsByTagName('ul');
console.log(ulColection);
for (const ulColectionElement of ulColection) {
    console.log(ulColectionElement);
ulColectionElement.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

contentElement.style.background = 'blue';
rulesElement.style.background = 'blue';

for (const liColectionElement of liColection) {
    console.log(liColectionElement);
    liColectionElement.style.background = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fs_rulesClass =  document.getElementsByClassName('fc_rules');
console.log(fs_rulesClass);
for (const fsRulesClass of fs_rulesClass) {
    console.log(fsRulesClass);
    fsRulesClass.style.background = 'red';
}
