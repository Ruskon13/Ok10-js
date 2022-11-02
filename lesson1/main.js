// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123,
// 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello ='hello'
console.log(hello);

let owu = 'owu'
console.log(owu);

let num1 = 1
console.log(num1);

let num2 = -999
console.log(num2);

const PI = 3.14
console.log(PI);

let boolean1 = true
console.log(boolean1);

let boolean2= false
console.log(boolean2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Ruslan'
let middleName = 'Ihorovich'
let lastName = 'Kondra'

let person = firstName+' '+middleName+' '+lastName;
console.log(person);

let person2 = `${firstName} ${middleName} ${lastName}`
console.log(person2);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName2 =prompt('Your name:')
let middleName2 = prompt('Your middlename:')
let age2 = +prompt('Your age:')

let person3 = firstName2+' '+middleName2+' '+age2;
console.log(person3);