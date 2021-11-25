// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let symb1 = '..';
// let symb2 = '---';
// let symb3 = '__';
// let validName = (string, symbol) => {
//     let res = [];
//     let arr = string.split(symbol);
//     for (const item of arr) {
//         res.push(item)
//     }
//     return res.join(' ').trim();
// };
// console.log(validName(n1, symb1));
// console.log(validName(n2, symb2));
// console.log(validName(n3, symb3));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let createRandom = (lenght) => {
    let newArray = [];
    for (let i = 0; i < lenght; i++){
        newArray.push(Math.floor(Math.random() * 100));
    }
    return newArray;
}
let result = createRandom(10);
console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// result.sort(function(a, b) {
//     return a - b;
// });
// console.log(result);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

//
// let filterArray = result.filter(item => {
//     return item % 2 === 0;
// });
//
// console.log(filterArray);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let map = result.map (num => num + " ");
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort()
// });
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців