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
// day()21


function item1(wakeup, callback) {
    setTimeout(() => {
        if (wakeup) {
            console.log('hello');
            callback(null);
        } else {
            callback('bye', null);
        }
    }, 3);
}

function item2(brakfast, callback) {
    setTimeout(() => {
        if (brakfast) {
            console.log('good');
            callback(null);
        } else {
            callback('bee', null);
        }
    }, 0.5);
}

function item3(shover, callback) {
    setTimeout(() => {
        if (shover) {
            console.log('hot');
            callback(null);
        } else {
            callback('cold', null);
        }
    }, 1);
}

function item4(bus, callback) {
    setTimeout(() => {
        if (bus) {
            console.log('bus');
            callback(null);
        } else {
            callback(' no bus', null);
        }
    }, 0.3);
}

function item5(work, callback) {
    setTimeout(() => {
        if (work) {
            console.log('work');
            callback(null);
        } else {
            callback('no work', null);
        }
    }, 5);
}

function item6(bushome, callback) {
    setTimeout(() => {
        if (bushome) {
            console.log('bus home');
            callback(null);
        } else {
            callback('no bus home', null);
        }
    }, 0.1);
}

function item7(dinner, callback) {
    setTimeout(() => {
        if (dinner) {
            console.log('dinner');
            callback(null);
        } else {
            callback('no dinner', null);
        }
    }, 0.5);
}

function item8(lesson, callback) {
    setTimeout(() => {
        if (lesson) {
            console.log('lesson');
            callback(null);
        } else {
            callback('no lesson', null);
        }
    }, 1);
}

function item9(sleeep, callback) {
    setTimeout(() => {
        if (sleeep) {
            console.log('sleep');
            callback();
        } else {
            callback('no sleep', null);
        }
    }, 3);
}

item1(true, () => {
    item2(true, () => {
        item3(true, () => {
            item4(true, () => {
                item5(true, () => {
                    item5(true, () => {
                        item6(true, () => {
                            item7(true, () => {
                                item8(true, () => {
                                    item9(true, () => {
                                        console.log('done')
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



// item1(false, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         item2(false, (err2) => {
//             if (err2) {
//                 console.error(err2)
//             } else {
//                 item3(false, (err3) => {
//                     if (err3) {
//                         console.error(err3)
//                     } else {
//                         item4(false, (err4) => {
//                             if (err4) {
//                                 console.error(err4)
//                             } else {
//                                 item5(false, (err5) => {
//                                     if (err5) {
//                                         console.error(err5)
//                                     } else {
//                                         item5(false, (err6) => {
//                                             if (err5) {
//                                                 console.error(err6)
//                                             } else {
//                                                 item6(false, (err7) => {
//                                                     if (err6) {
//                                                         console.error(err7)
//                                                     } else {
//                                                         item7(false, (err8) => {
//                                                             if (err7) {
//                                                                 console.error(err8)
//                                                             } else {
//                                                                 item8(false, (err9) => {
//                                                                     if (err8) {
//                                                                         console.error(err9)
//                                                                     } else {
//                                                                         item9(false, (err9) => {
//                                                                             if (err9){
//                                                                                 console.error(err9)
//                                                                             } else {
//                                                                                 console.log('data')
//                                                                                 item1(true, ()=> {
//
//                                                                                 })
//
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })
