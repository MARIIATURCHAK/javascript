let url = new URL(location.href);
let jsonPostOb = url.searchParams.get('postId');

let postCont = document.getElementById('div');
fetch('https://jsonplaceholder.typicode.com/posts/' + jsonPostOb)
    .then((response) => response.json())
    .then(post => {

        let divPost = document.createElement('div');
        divPost.classList.add('divPost');

        let Post = document.createElement('div');
        Post.classList.add('post');
        Post.innerText = ` userId: ${post.userId} id: ${post.id}  title: ${post.title} body: ${post.body}`;

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then((response) => response.json())
                .then(comments => {
                        for (const comment of comments) {
                                let commentContainer = document.createElement('div');
                                commentContainer.classList.add('commentContainer');


                                let comentDiv = document.createElement('div');
                                comentDiv.classList.add('commentDiv');
                                comentDiv.innerText = `postId: ${comment.postId}. postId: ${comment.id}. name: ${comment.name}. email: ${comment.email}. body: ${comment.body}.`;

                                divPost.appendChild(commentContainer);
                                commentContainer.append(comentDiv);
                        }
                });


        postCont.appendChild(divPost);
        divPost.appendChild(Post);

    })