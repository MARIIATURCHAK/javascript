// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(posts => {
        let wrap = document.createElement('div')
        wrap.classList.add('wrap');
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');
            divPost.innerHTML = `
                      <h2> ${post.id}</h2>
                      <h3> ${post.title}</h3>
                      <h4> ${post.body}</h4>
                    `;
            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'click';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then((response) => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement('div');
                                divComment.classList.add('divComment');
                                divComment.innerHTML = `
                      <h2> ${comment.id}</h2>
                      <h3> ${comment.name}</h3>
                      <h3> ${comment.email}</h3>
                      <h4> ${comment.body}</h4>
                    `;

                                wrap.appendChild(divComment)
                            }
                            button.disabled = true;
                        }
                    })
            }
                divPost.appendChild(button);
                wrap.appendChild(divPost);
                document.body.appendChild(wrap);
            }
    })




