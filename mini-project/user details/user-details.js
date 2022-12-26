<!--На странице user-details.html:-->
<!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
<!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
// (для получения постов используйте эндпоинт https:
//jsonplaceholder.typicode.com/users/USER_ID/posts)



    let url = new URL(location.href)
    let id = url.searchParams.get('id')

fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    .then(value => value.json())
    .then(userInfo => {

        let page = document.createElement('div');
        page.classList.add('page')

        let container = document.createElement('div');
        container.classList.add('container')

        let information = document.createElement('div');
        information.classList.add('information-details-posts')
        container.appendChild(information)

        let details = document.createElement('div')
        details.classList.add('userDetails')
        information.appendChild(details)

        let posts = document.createElement('div');
        posts.classList.add('posts')
        information.appendChild(posts)

        let postButton = document.createElement('button');
        postButton.classList.add('postButton')
        posts.appendChild(postButton)


        postButton.innerHTML = `see title's`
        page.appendChild(container)
        document.body.appendChild(page)


        for (const user in userInfo) {

            if (typeof userInfo[user] !== 'object'){
                let userDiv = document.createElement('div');
                userDiv.innerText = `${user}: ${userInfo[user]} `
                details.appendChild(userDiv)

            }else{
                let userDivObj = document.createElement('div');
                userDivObj.innerText = `${user}:`
                details.appendChild(userDivObj)


                for (const objKey in userInfo[user]) {

                    if (typeof userInfo[user][objKey] !== 'object'){
                        let userDiv = document.createElement('div');
                        userDiv.innerText = `${objKey}: ${userInfo[user][objKey]}`
                        userDivObj.append(userDiv)

                    } else {
                        let userInnerDiv = document.createElement('div');
                        userInnerDiv.innerText = `${objKey}:`
                        userDivObj.appendChild(userInnerDiv)


                        for (const moreInfo in userInfo[user][objKey]) {

                            let div = document.createElement('div')
                            div.innerHTML = `${moreInfo}: ${userInfo[user][objKey][moreInfo]}`
                            userInnerDiv.append(div)
                        }
                    }

                }
            }
        }

        postButton.onclick = function (){
            let urlPosts = new URL(location.href);
            let id = urlPosts.searchParams.get('id');
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(postes => {
                    let divPost = document.createElement('div');
                    divPost.classList.add('post')
                    posts.appendChild(divPost)

                    for (const post of postes) {
                        let divElementPost = document.createElement('div');
                        divElementPost.classList.add('post-element')
                        divElementPost.innerHTML = `${post.title}`
                        let a = document.createElement('a');
                        a.href = `../post details/post-details.html?postID=${post.id}&userID=${id}`
                        let linkButton = document.createElement('button');
                        a.appendChild(linkButton)
                        linkButton.innerHTML = `more`
                        linkButton.classList.add('moreButton')
                        divPost.appendChild(divElementPost)
                        divElementPost.appendChild(a)
                        postButton.disabled = "true"
                    }
                })
        }

    });