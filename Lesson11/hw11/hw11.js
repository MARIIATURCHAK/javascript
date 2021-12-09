// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form =  document.forms['form'];
// let name = form.name.value;
// let age = +form.age.value;
// form.appendChild(name);
// form.appendChild(age);
// let button = document.getElementById('button');
// let key = 'key';
// let click = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem(key, JSON.stringify(user));
// };
//
// button.addEventListener('click', function (){
//     click(name.value, age.value);
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form =  document.forms;
let model =  form.carForm.model;
console.log(model.value)
let type =  form.carForm.type;
let volume =  form.carForm.volume;
let button = document.getElementById('button');
let key = 'key';

let click = (modelCar, typeCar, volumeCar) => {
    let arrayCar = JSON.parse(localStorage.getItem(key)) || [];

    arrayCar.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(key, JSON.stringify(arrayCar));
}
button.addEventListener('click', function (){
    click(model.value, type.value, volume.value);
})


