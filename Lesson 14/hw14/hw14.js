function item1 (wakeup) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (wakeup) {
                console.log('hello');
                resolve (wakeup)
            } else {
                console.log('bye');
                reject ('Oops')
            }
        }, 3)
    })
}
function item2 (brakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (brakfast) {
                console.log('good');
                resolve (brakfast)
            } else {
                console.log('bee');
                reject ('Oops')
            }
        }, 0.5)
    })
}
function item3 (shover) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (shover) {
                console.log('hot');
                resolve (shover)
            } else {
                console.log('brr');
                reject ('Oops')
            }
        }, 1)
    })
}
function item4 (bus) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (bus) {
                console.log('bus');
                resolve (bus)
            } else {
                console.log('nobus');
                reject ('Oops')
            }
        }, 0.3)
    })
}
function item5 (work) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (work) {
                console.log('work');
                resolve (work)
            } else {
                console.log('nowork');
                reject ('nowork')
            }
        }, 5)
    })
}

function item6 (bushome) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (bushome) {
                console.log('bushome');
                resolve (bushome)
            } else {
                console.log('nobushome');
                reject ('Oops')
            }
        }, 0.1)
    })
}
function item7 (dinner) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (dinner) {
                console.log('dinner');
                resolve (dinner)
            } else {
                console.log('nodinner');
                reject ('nodinner')
            }
        }, 0.5)
    })
}
function item8 (lesson) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (lesson) {
                console.log('lesson');
                resolve (lesson)
            } else {
                console.log('nolesson');
                reject ('nolesson')
            }
        }, 1)
    })
}
function item9 (sleeep) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (sleeep) {
                console.log('sleeep');
                resolve (sleeep)
            } else {
                console.log('nosleeep');
                reject ('nosleeep')
            }
        }, 3)
    })
}


item1(true)
.then(done =>{
    return item2(done)
})
.then( item2 => {
    return item3 (item2)
})
.then(item3 => {
    return item4 (item3)
})
    .then(item4 => {
    return item5 (item4)
})
    .then(item5 => {
    return item6 (item5)
})
    .then(item6 => {
    return item7 (item6)
})
    .then(item7 => {
    return item8 (item7)
}).
then(item8 => {
    return item9 (item8)
})
.catch(e => {
    console.error(e)
})
.finally(() => {
    console.log('Final')
})