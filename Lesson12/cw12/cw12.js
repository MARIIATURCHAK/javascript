
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
            wrap.appendChild(divPost)
            document.body.appendChild(wrap)
        }
    })