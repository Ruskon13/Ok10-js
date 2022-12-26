let urlUser = new URL(location.href);
let idUser = urlUser.searchParams.get('userID');

let urlPost = new URL(location.href);
let idPost = urlPost.searchParams.get('postID')

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
    .then(response => response.json())
    .then(post => {
        let container = document.createElement('div');
        let userInformation = document.createElement('div');
        container.classList.add(`container`)
        userInformation.classList.add('userInformation')
        container.appendChild(userInformation)
        document.body.appendChild(container)

        for (const postElement of post) {
            if(postElement.id === +idPost){
                for (const key in postElement) {
                    let keyDiv = document.createElement('div');
                    keyDiv.innerHTML = `${key}: ${postElement[key]}`
                    userInformation.appendChild(keyDiv)
                }
            }
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
            .then(response => response.json())
            .then(comments => {
                let commentsWrapperDiv = document.createElement('div');
                commentsWrapperDiv.classList.add(`userComments`)
                container.appendChild(commentsWrapperDiv)
                for (const commentsObj of comments) {
                    let commentsDiv = document.createElement('div');
                    commentsDiv.classList.add('block-comments')
                    commentsWrapperDiv.appendChild(commentsDiv)
                    for (const commentsKey in commentsObj) {
                        let commentsInnerElements = document.createElement('div');
                        commentsInnerElements.classList.add('inside-elements')
                        commentsInnerElements.innerHTML = `${commentsKey}: ${commentsObj[commentsKey]}`
                        commentsDiv.appendChild(commentsInnerElements)
                    }
                }
            });
    });