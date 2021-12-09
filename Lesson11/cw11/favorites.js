
const key = 'key';
let user = JSON.parse(localStorage.getItem(key));
const div = document.getElementById('div')

console.log(user)


for (const el of user) {
    const divUser = document.createElement('div')
    divUser.innerText = `${el.name}`;
    div.appendChild(divUser)
    divUser.className = 'users';

}
document.body.appendChild(div)
