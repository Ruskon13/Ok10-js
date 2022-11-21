// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function square(a,b) {
//     let result = a*b;
//     // console.log(result);
//     return result;
// }
// let x= square(5,6);
// console.log(x)
//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function squareOfCicle(PI,r) {
//     let square =PI*r**2;
//     return square;
// }
//
// let x = squareOfCicle(3.14,10)
// console.log(x)
//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
//
// function cylinder(PI,r,h) {
//     let square = 2*PI*r*(h+r)
//     return square;
// }
// let x = cylinder(3.14,5,9);
// console.log(x)
//
// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 32, status: false},
//     {name: 'max', age: 32, status: true}
// ];
//
// function showUser(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
//
// }
// showUser(users)
//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function showParagraph(text) {
//     document.write(`<p>${text}</p>`)
// }
// showParagraph('Lorem ipsum dolor sit amet.');
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function column(text) {
//
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// column('Lorem ipsum dolor sit amet.');
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function func(text, count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// document.write(`</ul>`)
// }

// func('lorem ipsum',5)
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [2,5,true,false, 'str'];
//
// function func(array) {
//         document.write(`<ul>`)
//         for (const arrayElement of array) {
//             document.write(`<li>${arrayElement}</li>`)
//         }
//         document.write(`</ul>`)
// }
//
// func(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id: 1,
//         name: 'Ruslan',
//         age: 19
//     },{
//         id: 2,
//         name: 'Ihor',
//         age: 48
//     }
// ];
//
// function funcUsers(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`)
//     }
// }
// funcUsers(arr)

// - створити функцію яка повертає найменше число з масиву

// let arr = [1, -300, 5, 7, 9, -15, 0, 100]
//
// let x = function (array) {
//
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// console.log(x(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,10,100];
//
// function funcSum(array) {
//
//     let sum = 0;
//     for (const number of array) {
//         sum += number;
//     }
//     return sum;
// }
//
// console.log(funcSum(arr));
