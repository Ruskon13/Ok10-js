// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        let page = document.createElement('div');
        page.classList.add('page')
        let container = document.createElement('div');
        container.classList.add('container')
        page.appendChild(container)
        document.body.appendChild(page)

        for (const user of users) {

            let div = document.createElement('div');
            let a = document.createElement('a')
            let button = document.createElement('button');
            let p = document.createElement('p');

            div.classList.add('card-of-user')
            p.classList.add('nameOf-User')
            p.innerText = user.id + '. ' + user.name
            button.classList.add('index-button');
            button.innerText = 'More info'
            a.href = `../user details/user-details.html?id=${user.id}`


            a.appendChild(button)
            container.appendChild(div)
            div.append(p,a)

        }

    })

