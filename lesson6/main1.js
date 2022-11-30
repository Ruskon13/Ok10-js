// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// console.log(str.length)
//
// let str1 = 'lorem ipsum';
// console.log(str1.length)
//
// let str2 = 'javascript is cool';
// console.log(str2.length)
//

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// let Upper = str.toUpperCase()
// console.log(Upper)
//
// let str1 = 'lorem ipsum';
// let Upper1 = str1.toUpperCase()
// console.log(Upper1)
//
// let str2 = 'javascript is cool';
// let Upper2 = str2.toUpperCase();
// console.log(Upper2)
//
//

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// let Lower = str.toLowerCase();
// console.log(Lower);
//
// let str1 = 'LOREM IPSUM';
// let Lower1 = str1.toLowerCase();
// console.log(Lower1)
//
// let str2 = 'JAVASCRIPT IS COOL';
// let Lower2 = str2.toLowerCase();
// console.log(Lower2)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let clear = str.trim();
// console.log(clear.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str){
//     let arr = str.split(' ');
//     console.log(arr);
// }
// stringToarray(str);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let map = arr.map(function (num){
//     return String(num)
//     }
// )
// console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3]
// function sortNums(array, direction){
//     if(direction === 'ascending'){
//         let sortArr = array.sort((a, b) => {
//             return a - b
//         })
//     console.log(sortArr)
//     }
//     if(direction === 'descending'){
//         let sortArr = array.sort((a, b) => {
//             return b - a;
//         })
//         console.log(sortArr)
//     }
// }
//
// sortNums(nums, 'ascending');
// sortNums(nums, 'descending');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortFilter = coursesAndDurationArray
//     .sort((a, b) => {
//         return b.monthDuration - a.monthDuration
//     })
//     .filter(month => {
//         return month.monthDuration > 5
//     })
// console.log(sortFilter)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const allCard = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: "jack", color: 'black'},
    {cardSuit: 'spade', value: "queen", color: 'black'},
    {cardSuit: 'spade', value: "king", color: 'black'},
    {cardSuit: 'spade', value: "ace", color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: "jack", color: 'black'},
    {cardSuit: 'clubs', value: "queen", color: 'black'},
    {cardSuit: 'clubs', value: "king", color: 'black'},
    {cardSuit: 'clubs', value: "ace", color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: "jack", color: 'red'},
    {cardSuit: 'diamond', value: "queen", color: 'red'},
    {cardSuit: 'diamond', value: "king", color: 'red'},
    {cardSuit: 'diamond', value: "ace", color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: "jack", color: 'red'},
    {cardSuit: 'heart', value: "queen", color: 'red'},
    {cardSuit: 'heart', value: "king", color: 'red'},
    {cardSuit: 'heart', value: "ace", color: 'red'},
    {value: "joker", color: 'red'},
    {value: "joker", color: 'black'}
]
// - знайти піковий туз

// let searchAce = allCard.filter(card => card.cardSuit === 'spade' && card.value === 'ace' && card.color === 'black')
// console.log(searchAce)

// - всі шістки

// let searchSix = allCard.filter(card => card.value === 6)
// console.log(searchSix)

// - всі червоні карти

// let searchRed = allCard.filter(card => card.color === 'red')
// console.log(searchRed)

// - всі буби

// let searchDiamond = allCard.filter(card => card.cardSuit === 'diamond')
// console.log(searchDiamond)

// - всі трефи від 9 та більше

// let searchClubs = allCard.filter(card => card.cardSuit === 'clubs')
// let Clubs = searchClubs.splice(0,3)
// console.log(searchClubs)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = allCard.reduce((accumulator, card) => {
    if(card.cardSuit === 'spade'){
        accumulator.spades.push(card)
    }else if(card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card)
    }else if(card.cardSuit === 'heart'){
        accumulator.hearts.push(card)
    }else if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card)
    }
    return accumulator
},{spades:[], diamonds:[], hearts:[], clubs:[] });
console.log(reduce);