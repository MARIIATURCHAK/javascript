// TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// function item1(wakeup) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeup) {
//                 console.log('hello');
//                 resolve(wakeup)
//             } else {
//                 console.log('bye');
//                 reject('Oops');
//             }
//         }, 3);
//     })
// }
// function item2(brakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (brakfast) {
//                 console.log('good');
//                 resolve(brakfast);
//             } else {
//                 console.log('bee');
//                 reject('Oops');
//             }
//         }, 0.5);
//     })
// }
// function item3(shover) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shover) {
//                 console.log('hot');
//                 resolve(shover)
//             } else {
//                 console.log('brr');
//                 reject('Oops');
//             }
//         }, 1);
//     })
// }
// function item4(bus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bus) {
//                 console.log('bus');
//                 resolve(bus);
//             } else {
//                 console.log('nobus');
//                 reject('Oops');
//             }
//         }, 0.3);
//     })
// }
// function item5(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 console.log('work');
//                 resolve(work);
//             } else {
//                 console.log('nowork');
//                 reject('nowork');
//             }
//         }, 5);
//     })
// }
// function item6(bushome) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bushome) {
//                 console.log('bushome');
//                 resolve(bushome);
//             } else {
//                 console.log('nobushome');
//                 reject('Oops');
//             }
//         }, 0.1);
//     })
// }
// function item7(dinner) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinner) {
//                 console.log('dinner');
//                 resolve(dinner);
//             } else {
//                 console.log('nodinner');
//                 reject('nodinner');
//             }
//         }, 0.5);
//     })
// }
// function item8(lesson) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lesson) {
//                 console.log('lesson');
//                 resolve(lesson);
//             } else {
//                 console.log('nolesson');
//                 reject('nolesson');
//             }
//         }, 1);
//     })
// }
// function item9(sleeep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleeep) {
//                 console.log('sleeep');
//                 resolve(sleeep);
//             } else {
//                 console.log('nosleeep');
//                 reject('nosleeep')
//             }
//         }, 3);
//     })
// }

// item1(true)
//     .then(done => {
//         return item2(done);
//     })
//     .then(item2 => {
//         return item3(item2);
//     })
//     .then(item3 => {
//         return item4(item3);
//     })
//     .then(item4 => {
//         return item5(item4);
//     })
//     .then(item5 => {
//         return item6(item5);
//     })
//     .then(item6 => {
//         return item7(item6);
//     })
//     .then(item7 => {
//         return item8(item7);
//     }).then(item8 => {
//     return item9(item8);
// })
//     .catch(e => {
//         console.error(e);
//     })
//     .finally(() => {
//         console.log('Final');
//     })



// function item1(wakeup) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeup) {
//                 console.log('hello');
//                 resolve(wakeup)
//             } else {
//                 console.log('bye');
//                 reject('Oops');
//             }
//         }, 3);
//     })
// }
// function item2(brakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (brakfast) {
//                 console.log('delicious');
//                 resolve(brakfast);
//             } else {
//                 console.log('bee');
//                 reject('nooooooooo');
//             }
//         }, 0.5);
//     })
// }
// function item3(shover) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shover) {
//                 console.log('hot');
//                 resolve(shover)
//             } else {
//                 console.log('brr');
//                 reject('O no');
//             }
//         }, 1);
//     })
// }
// function item4(bus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bus) {
//                 console.log('bus');
//                 resolve(bus);
//             } else {
//                 console.log('nobus');
//                 reject('Omg');
//             }
//         }, 0.3);
//     })
// }
// function item5(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 console.log('work');
//                 resolve(work);
//             } else {
//                 console.log('nowork');
//                 reject('nowork');
//             }
//         }, 5);
//     })
// }
// function item6(bushome) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bushome) {
//                 console.log('bus home');
//                 resolve(bushome);
//             } else {
//                 console.log('no bus home');
//                 reject('Oops');
//             }
//         }, 0.1);
//     })
// }
// function item7(dinner) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinner) {
//                 console.log('dinner');
//                 resolve(dinner);
//             } else {
//                 console.log('no dinner');
//                 reject('nodinner');
//             }
//         }, 0.5);
//     })
// }
// function item8(lesson) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lesson) {
//                 console.log('lesson');
//                 resolve(lesson);
//             } else {
//                 console.log('nolesson');
//                 reject('nolesson');
//             }
//         }, 1);
//     })
// }
// function item9(sleeep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleeep) {
//                 console.log('sleeep');
//                 resolve(sleeep);
//             } else {
//                 console.log('no sleeep');
//                 reject('nosleeep')
//             }
//         }, 3);
//     })
// }
//
// async function day() {
//     try {
//         const one = await item1 (true);
//         const two = await item2 (one);
//         const three = await item3 (two);
//         const four = await item4 (three);
//         const five = await item5 (four);
//         const six = await item6 (five);
//         const seven = await item7 (six);
//         const eight = await item8 (seven);
//         const nine = await item9 (eight);
//     } catch (e) {
//         console.error(e)
//     }
// }
// day()


//Нажаль як робити колл беками так і не змогла зрозуміти колт дві функції все зрозуміло а як застосувати в більше нажаль не зрозуміла

// let time = 1;
// function item1 (wakeup, callback) {
//     setTimeout(() => {
//         if (wakeup) {
//             time += 1;
//             console.log('hello');
//             callback(time);
//         } else {
//             console.log('bye');
//         }
//     }, 3);
// }
//
// function item2(brakfast, callback) {
//     setTimeout(() => {
//         if (brakfast) {
//             time += 20;
//             console.log('good');
//             callback(time);
//         } else {
//             console.log('bee');
//         }
//     }, 0.5);
// }
//
// function item3(shover, callback) {
//         setTimeout(() => {
//             if (shover) {
//                 time += 15;
//                 console.log('hot');
//                 callback (time);
//             } else {
//                 console.log('brr');
//             }
//         }, 1);
// }
// function item4(bus, callback) {
//         setTimeout(() => {
//             if (bus) {
//                 time += 35;
//                 console.log('bus');
//                 callback (time);
//             } else {
//                 console.log('no bus');
//             }
//         }, 0.3);
// }
// function item5(work, callback) {
//         setTimeout(() => {
//             if (work) {
//                 time += 480;
//                 console.log('work');
//                 callback (time);
//             } else {
//                 console.log('no work');
//             }
//         }, 5);
// }
// function item6(bushome, callback) {
//         setTimeout(() => {
//             if (bushome) {
//                 time += 30;
//                 console.log('bushome');
//                 callback (time);
//             } else {
//                 console.log('no bus home');
//             }
//         }, 0.1);
// }
// function item7(dinner, callback) {
//         setTimeout(() => {
//             if (dinner) {
//                 time += 30;
//                 console.log('dinner');
//                 callback (time);
//             } else {
//                 console.log('no dinner');
//             }
//         }, 0.5);
// }
// function item8(lesson, callback) {
//         setTimeout(() => {
//             if (lesson) {
//                 time += 180;
//                 console.log('lesson');
//                 callback (time);
//             } else {
//                 console.log('no lesson');
//             }
//         }, 1);
// }
// function item9(sleeep, callback) {
//         setTimeout(() => {
//             if (sleeep) {
//                 time += 649;
//                 console.log('sleeep');
//                 callback (time);
//             } else {
//                 console.log('no sleeep');
//             }
//         }, 3);
// }

