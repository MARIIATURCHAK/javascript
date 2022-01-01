let url = new URL(location.href);
let jsonUserOb = url.searchParams.get('id');

let container = document.getElementById('div');
fetch('https://jsonplaceholder.typicode.com/users/' + jsonUserOb)
    .then((response) => response.json())
    .then(user => {
        let divUser = document.createElement('div');
        divUser.classList.add('divUser');

        let wrapUser = document.createElement('div');
        wrapUser.classList.add('wrapUser');

        let main = document.createElement('div');
        main.classList.add('main');
        main.innerText = ` id: ${user.id}. name: ${user.name}. username: ${user.username}. email: ${user.email}.`;

        let address = document.createElement('div');
        address.classList.add('address');
        address.innerText = `street: ${user.address.street}. suite: ${user.address.suite}. city: ${user.address.city}. zipcode: ${user.address.zipcode}.
       lat: ${user.address.geo.lat}. lng:  ${user.address.geo.lng}.`;

        let phone = document.createElement('div');
        phone.classList.add('phone');
        phone.innerText = `phone: ${user.phone}`;

        let website = document.createElement('div');
        website.classList.add('website');
        website.innerText = `website: ${user.website}`;

        let company = document.createElement('div');
        company.classList.add('company');
        company.innerText = `company name: ${user.company.name} company catch phrase: ${user.company.catchPhrase} company bs: ${user.company.bs}`;

        let postOfCurrentUser = document.createElement('button');
        postOfCurrentUser.classList.add('postButton');
        postOfCurrentUser.innerText = 'post of current user'
        postOfCurrentUser.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then((response) => response.json())
                    .then(posts => {
                            for (const post of posts) {
                                    let postContainer = document.createElement('div');
                                    postContainer.classList.add('postContainer');

                                    let postWrap = document.createElement('div');
                                    postWrap.classList.add('postWrap');

                                    let postDiv = document.createElement('div');
                                    postDiv.classList.add('postDiv');
                                    postDiv.innerText = `title: ${post.title}`;

                                    let detailsPostLink = document.createElement('a');
                                    detailsPostLink.innerText = 'details';
                                    detailsPostLink.href = 'post-details.html?postId=' + post.id;

                                    divUser.appendChild(postContainer);
                                    postContainer.append(postWrap, detailsPostLink);
                                    postWrap.append(postDiv);
                            }
                    });
        }
            container.appendChild(divUser);
        divUser.append(wrapUser, postOfCurrentUser);
            wrapUser.append(main, address, phone, website, company);
        })

