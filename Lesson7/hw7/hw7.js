// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone

}
let array = [
    new User(101, 'vasya', 'pupkin', 'vasya@mail.com', 380935250501 ),
    new User(2, 'vasknbhnka', 'popkin', 'vasya@mail.com', 380935250502 ),
    new User(44, 'vaya', 'popkin', 'vasya@mail.com', 380935250503 ),
    new User(93, 'vaskya', 'pokin', 'vasya@mail.com', 380935250504 ),
    new User(66, 'vasyk', 'popin', 'vasya@mail.com', 380935250505 ),
    new User(48, 'jkvsya', 'popkn', 'vasya@mail.com', 380935250506 ),
    new User(89, 'varya', 'popki', 'vasya@mail.com', 380935250507 ),
    new User(91, 'vasya', 'ipkin', 'vasya@mail.com', 380935250508 ),
    new User(51, 'vawya', 'pkin', 'vasya@mail.com', 38093525050 ),
    new User(60, 'sya', 'poin', 'vasya@mail.com', 380935250510 )
];
console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUser = array.filter(user => {
//     if (user.id % 2 === 0) {
//         return user;
//     }
// });
//
// console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = array.sort((uid1, uid2) => {
//     return uid1.id - uid2.id;
// });
// console.log(sort);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let clientArray = [
//     new Client(55, 'jffm', 'kjnlc', 'kjvn@gmail.com', 380935250828, ['uuu', 'ppp', 'ooo', 'sss', 'zzz']),
//     new Client(86, 'jffm', 'bdzb', 'kjvn@gmail.com', 380935250828, ['ttt', 'ppp', 'ooo','ggg', 'eee', 'mmm']),
//     new Client(855, 'jffj', 'kdzblc', 'kjvn@gmail.com', 380935250828, ['ttt', 'ooo']),
//     new Client(755, 'jdsvm', 'bdc', 'kjvn@gmail.com', 380935250828, ['ttt', 'ppp', 'ooo']),
//     new Client(85, 'vdkmm', 'bxdbvc', 'kjvn@gmail.com', 380935250828, ['ttt', 'ppp', 'uuu', 'rrr']),
//     new Client(96, 'vlkmzfm', 'bdfnlc', 'kjvn@gmail.com', 380935250828, ['ttt', 'ppp', 'ooo']),
//     new Client(8, 'xbhm', 'bd', 'kjvn@gmail.com', 380935250828, [ 'ooo']),
//     new Client(105, 'eszh', 'vzc', 'kjvn@gmail.com', 380935250828, ['ttt', 'aaa','ppp', 'ooo']),
//     new Client(93, 'hzh', 'klc', 'kjvn@gmail.com', 380935250828, ['ttt', 'ooo']),
//     new Client(203, 'dfhnx', 'jnlc', 'kjvn@gmail.com', 380935250828, ['ttt', 'ppp', 'ooo']),
// ];
// console.log(clientArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = clientArray.sort((order1, order2) => {
//     return order1.order.length - order2.order.length;
// });
// console.log(sort);