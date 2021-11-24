// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
//
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1)
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3)
//
// let toLowerCase1 = toUpperCase1.toLowerCase();
// console.log(toLowerCase1);
// let toLowerCase2 = toUpperCase2.toLowerCase();
// console.log(toLowerCase2);
// let toLowerCase3 = toUpperCase3.toLowerCase();
// console.log(toLowerCase3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);
//
// // console.log(str.length);
// // console.log(trim.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str1 = 'Каждый охотник желает знать';
// let arr = str1.split(' ');
// console.log(arr);
//
//
//
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let array = stringToarray(str);
// console.log(array);
// document.write(array);



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let delete_characters = (str, length) => {
//     return str.substr(0, length)
// };
// let str = 'Каждый охотник желает знать';
// document.write(delete_characters(str, 7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


let insert_dash = (toUpperCase1) =>{
    return toUpperCase1.replaceAll(' ', '-')
}
let str = "HTML JavaScript PHP";
let toUpperCase1 = str.toUpperCase();
document.write(insert_dash(toUpperCase1));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let firstSymbolUp = (str) => {
//     if ( typeof str[0] === 'string') {
//         return str[0].toUpperCase() + str.slice(1)
//     }
// }
// document.write(firstSymbolUp('hello okten'));
// console.log(firstSymbolUp('hello okten'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    if ( typeof str[0] === 'string') {
        return str[0].toUpperCase() + + str.slice(1);
    }
}
document.write(capitalize('hello okten'));
console.log(capitalize('hello okten'));