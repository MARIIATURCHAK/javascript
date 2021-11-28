// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function  Cars (model, maker, graduationyear, maxspeed, volume) {
//     this.model = model;
//     this.maker = maker;
//     this.graduationyear = graduationyear;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         return `Їдемо зі швидкістю ${this.maxspeed} на годину`;
//     };
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.graduationyear =  newValue;
//     };
//     this.addDriver = function (driver) {
//         this.drive = driver
//     }
// }
// let addCar = new Cars('Nessan', 'Japanese', 2016, 230, 1.6);
// console.log(addCar);
// console.log(addCar.drive());
// addCar.info();
// addCar.increaseMaxSpeed(10);
// console.log(addCar.drive());
// addCar.changeYear(2018);
// addCar.info();
// addCar.addDriver('Ivan');
// console.log(addCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, maker, graduationyear, maxspeed, volume) {
//         this.model = model;
//         this.maker = maker;
//         this.graduationyear = graduationyear;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//     drive () {
//         return `Їдемо зі швидкістю ${this.maxspeed} на годину`;
//     };
//     info () {
//         for (let key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     changeYear (newValue) {
//         this.graduationyear = newValue;
//     };
//     addDriver (driver) {
//         this.drive = driver
//     }
// }
// let addCar = new Cars('Nessan', 'Japanese', 2016, 230, 1.6);
// console.log(addCar);
// console.log(addCar.drive());
// addCar.info();
// addCar.increaseMaxSpeed(20);
// console.log(addCar.drive());
// addCar.changeYear(2018);
// addCar.info();
// addCar.addDriver('Mariia');
// console.log(addCar);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
// let araayCinderella = [
//     new Cinderella('Ira', 30, 38),
//     new Cinderella('Yliia', 28, 36),
//     new Cinderella('Nataa', 22, 35),
//     new Cinderella('Masha', 28, 38),
//     new Cinderella('Olja', 22, 40),
//     new Cinderella('Alla', 28, 38),
//     new Cinderella('Katia', 22, 37),
//     new Cinderella('Ivanna', 22, 38),
//     new Cinderella('Ira', 29, 37),
//     new Cinderella('Lika', 22, 39)
// ];
// console.log(araayCinderella);
//
// class Princ {
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
// }
// let Prince = new Princ ('Taras', 31, 36);
//
//
// let newPara = (araayCinderella, Prince) => {
//     for (let item of araayCinderella) {
//         if (item.footsize === Prince.findShose) {
//             return `Your Cinderella: ${item.name}`
//         }
//     }
// };
// console.log(newPara(araayCinderella, Prince))
//
//
// let find = araayCinderella.find(item => item.footsize === Prince.findShose )
// console.log(find);