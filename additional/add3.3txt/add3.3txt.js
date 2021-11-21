// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let array = [100,250,50,168,120,345,188];
// let sum = 0;
// for (i=0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// sum = sum / array.length;
// console.log(sum)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (city.user_id === user.id) {
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId)

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
//
//
//
//
//     - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [100, 250, 50, 168, 120, 345, 188, 26, 93, 19];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//     console.log(array[i])
// }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array = [100, 250, 50, 168, 120, 345, 188, 26, 93, 19];
// let array2 = [];
// for (let i = 0; i < array.length; i++) {
//         array2.push(array[i])
//     }
// console.log(array2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// array = [ 'a', 'b', 'c'];
// strin = '';
// for (const string in array) {
//     strin = strin + array[string];
//
// }
// console.log(strin)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// array = [ 'a', 'b', 'c'];
// strin = "";
// let i = 0;
// while (i < array.length){
//     strin = strin + array[i];
//     i++;
// }
// console.log(strin);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// array = [ 'a', 'b', 'c'];
// strin = "";
// for (const string of array){
//     strin = strin + string;
// }
// console.log(strin);