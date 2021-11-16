// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// let num = [2,17,13,6,22,31,45,66,100,-18];
//
// 1. перебрати його циклом while

// let n = 0;
// while (n < num.length){
//     console.log(num[n]);
//     n++;
// }
// в зворотньому циклі (с заду на перед)

// let n = num.length - 1;
// while ( n >= 0) {
//     const numElement = num[n];
//     n--;
//     console.log(numElement)
// }

//     2. перебрати його циклом for

// for (let n of num){
//     console.log(n);
// }
// в зворотньому циклі (с заду на перед)

// for (let n = num.length - 1; n >= 0; n--) {
//     const numElement = num[n];
//     console.log(numElement)
// }



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let n = 0;
// while (n < num.length) {
//     if (n % 2 !== 0){
//         console.log(num[n]);
// }
//     n++;
// }
//// в зворотньому циклі (с заду на перед)
// let n = num.length - 1;
// while ( n >= 0) {
//     const numElement = num[n];
//     if (n % 2 === 0){
//         console.log(numElement);
//     }
//     n--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let n = 0; n < num.length; n++ ) {
//     if (n % 2 !== 0){
//         console.log(num[n]);
//     }
// }
// в зворотньому циклі (с заду на перед)

// for (let n = num.length - 1; n >= 0; n--) {
//     const numElement = num[n];
// if (n % 2 === 0)
//     console.log(numElement)
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let n = 0;
// while (n < num.length){
//     if (num[n] % 2 === 0) {
//         console.log(num[n]);
//     }
//     n++;
// }
// в зворотньому циклі (с заду на перед)

// let n = num.length - 1;
// while ( n >= 0) {
//     const numElement = num[n];
//     if (num[n] % 2 === 0){
//         console.log(numElement);
//     }
//     n--;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let n of num){
//     if (n % 2 === 0) {
//         console.log(n);
//     }
// }
//// в зворотньому циклі (с заду на перед)
// for (let n = num.length - 1; n >= 0; n--) {
//     const numElement = num[n];
// if (num[n] % 2 === 0)
//     console.log(numElement)
// }

// 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let n = 0; n < num.length; n++){
//     if (num[n]%3 === 0){
//         num[n] = "okten";
//             }
// }
// console.log(num);
// Нажаль це завдання не змогла зробити в зворотньому порядку так як const  не можна змінити а в іншому випадку воно не виходить. Підскажіть будь ласка як написати такий код) Дякую
//
// for (let n = num.length - 1; n >= 0; n--) {
//     if (num[n] % 3 === 0) {
//     num[n]= "okten";
// }
// }
// console.log(num)



// 8. вивести масив в зворотньому порядку.
// for (let n = num.length - 1; n >= 0; n--) {
//     const numElement = num[n];
//     console.log(num[n])
// }
//
