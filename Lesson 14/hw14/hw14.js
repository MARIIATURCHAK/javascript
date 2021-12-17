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




function item1(wakeup, callback) {
        setTimeout(() => {
            if (wakeup) {
                console.log('hello');
               callback ();
            } else {
                console.log('bye');
            }
        }, 3);

}
function item2(brakfast, callback) {
        setTimeout(() => {
            if (brakfast) {
                console.log('good');
                callback ();
            } else {
                console.log('bee');
            }
        }, 0.5);
}
function item3(shover, callback) {
        setTimeout(() => {
            if (shover) {
                console.log('hot');
                callback ();
            } else {
                console.log('brr');
            }
        }, 1);
}
function item4(bus, callback) {
        setTimeout(() => {
            if (bus) {
                console.log('bus');
                callback ();
            } else {
                console.log('nobus');
            }
        }, 0.3);
}
function item5(work, callback) {
        setTimeout(() => {
            if (work) {
                console.log('work');
                callback ();
            } else {
                console.log('nowork');
            }
        }, 5);
}
function item6(bushome, callback) {
        setTimeout(() => {
            if (bushome) {
                console.log('bushome');
                callback ();
            } else {
                console.log('nobushome');
            }
        }, 0.1);
}
function item7(dinner, callback) {
        setTimeout(() => {
            if (dinner) {
                console.log('dinner');
                callback ();
            } else {
                console.log('nodinner');
            }
        }, 0.5);
}
function item8(lesson, callback) {
        setTimeout(() => {
            if (lesson) {
                console.log('lesson');
                callback ();
            } else {
                console.log('nolesson');
            }
        }, 1);
}
function item9(sleeep, callback) {
        setTimeout(() => {
            if (sleeep) {
                console.log('sleeep');
                callback ();
            } else {
                console.log('nosleeep');
            }
        }, 3);
}


item1(true, () => {
    item2(item3())
})
item2(true, () => {
    console.log('two');
})
item3(true, () => {
    console.log('three');
})
item4(true, () => {
    console.log('four');
})
item5(true, () => {
    console.log('five');
})
item6(true, () => {
    console.log('six');
})
item7(true, () => {
    console.log('seven');
})
item8(true, () => {
    console.log('eight');

})
item9(true, () => {
    console.log('nine');
})
