// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

// let x = +prompt('Write your number:')
// if(x !=0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
// -----------------------------------------------------------------------------------------------------


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

// let time = +prompt('Write your number:')
// if ( time >=0 && time <= 15){
//     console.log('Перша чверть')
// } else if ( time >=16 && time <= 30){
//     console.log('Друга чверть')
// } else if ( time >=31 && time <= 45){
//     console.log('Третя чверть')
// } else if ( time >=46 && time <= 59){
//     console.log('Четверта чверть')
// } if (time >=60 || time <= -1){
//     console.log('Try again!')
// }
// -----------------------------------------------------------------------------------------------------
//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('Write your number:')
// if ( day >=1 && day <= 10){
//     console.log('Перша декада')
// } else if ( day >=11 && day <= 20){
//     console.log('Друга декада')
// } else if ( day >=21 && day <= 31){
//     console.log('Третя декада')
// } if (day < 1 || day > 31){
//     console.log('Try again!')
// }
// -----------------------------------------------------------------------------------------------------
//
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = prompt('Введіть порядковий номер дня тижня:')
//
// let Monday={
//     1 : 'Почистити зуби',
//     2 : 'Приготуватись до робочого дня'
// }
//
// // так можна зробити з кожним днем тижня
//
// switch (day) {
//     case '1':
//         console.log(Monday)
//         break;
//     case '2':
//         console.log('Tuesday')
//         break;
//     case '3':
//         console.log('Wednesday')
//         break;
//     case '4':
//         console.log('Thursday')
//         break;
//     case '5':
//         console.log('Friday')
//         break;
//     case '6':
//         console.log('Saturday')
//         break;
//     case '7':
//         console.log('Sunday')
//         break;
// }
// -----------------------------------------------------------------------------------------------------
//
//
// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('Enter number 1:')
// let b = +prompt('Enter number 2:')
//
// if (a > b){
//     console.log('Число 1 більше за число 2')
// } else if (a < b){
//     console.log('Число 2 більше за число 1')
// } else if (a = b){
//     console.log('Число 1 рівне числу 2')
// } else {
//     console.log('Try again!')
// }
// -----------------------------------------------------------------------------------------------------
//
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється false (хибноподібні, тобто кастується до false)

// let x = prompt() || 'default';
// console.log(x);