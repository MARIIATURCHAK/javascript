// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let container = document.createElement('div');
//         container.classList.add('container');
//         for (const post of posts) {
//             let postContainer = document.createElement('div');
//             postContainer.classList.add('post')
//             postContainer.innerHTML = `
//                          <h2> ${post.id}</h2>
//                          <h3> ${post.title}</h3>
//                        <h4> ${post.body}</h4>
//                     `;
//
//             container.appendChild(postContainer);
//             document.body.appendChild(container);
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrap = document.createElement('div')
        wrap.classList.add('wrap');
        for (const comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('comment');
            divComment.innerHTML = `
                      <h2> ${comment.id}</h2>
                      <h3> ${comment.name}</h3>
                      <h3> ${comment.email}</h3>
                      <h4> ${comment.body}</h4>
                    `;
            wrap.appendChild(divComment)
            document.body.appendChild(wrap);
        }
    })

