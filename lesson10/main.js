// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)



let shortInfo = document.querySelector('.shortInfo')

fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {

    for (const user of users) {
        let li = document.createElement('li');
        let a = document.createElement('a')

        li.innerText = user.id + ' ' + user.name
        a.innerText = 'More info'
        a.href = `user-details.html?id=${user.id}`

        shortInfo.appendChild(li)
        shortInfo.appendChild(a)
    }

})
