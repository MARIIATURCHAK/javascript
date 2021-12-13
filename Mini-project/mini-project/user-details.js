const div = document.getElementById('div');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
    for (const el of users) {
        let divComment = document.createElement('div');
        divComment.classList.add('divComment');
        divComment.innerHTML = `
                      <h2> ${el.id}</h2>
                      <h3> ${el.name}</h3>
                      <h4> ${el.username}</h4>
                      <h3> ${el.email}</h3>
                      <h3>${el.address}</h3>
                    `;
        div.appendChild(divComment)

    }
    document.body.appendChild(div)
    }
)
