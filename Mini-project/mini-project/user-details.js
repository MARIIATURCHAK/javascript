//
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            fetch('https://jsonplaceholder.typicode.com/users + user.id + /users')
                .then((response) => response.json())
                .then(users => {
                    let wrap = document.createElement('div')
                    wrap.classList.add('wrap');
                    for (const el of users) {
                        if (user.id === el.id) {
                            let divComment = document.createElement('div');
                            divComment.classList.add('divComment');
                            divComment.innerHTML = `
                      <h2> ${el.id}</h2>
                      <h3> ${el.name}</h3>
                      <h4> ${el.username}</h4>
                      <h3> ${el.email}</h3>
                    `;
                            wrap.appendChild(divComment);
                            div.appendChild(wrap);
                        }
                    }
                })

        }
    })