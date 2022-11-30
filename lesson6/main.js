// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'+'lorem ipsum' +'javascript is cool';
//
// console.log(a.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'+' ' +'lorem ipsum' +' ' +'javascript is cool';
//
// console.log(a.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD' + ' ' + 'LOREM IPSUM' + ' ' + 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   '.
// Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let cut = str.trim()
// console.log(cut);

// - Напишіть функцію stringToarray(str), яка перетворює
// рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
// let convert = str.split(' ');
// console.log(convert);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та
// колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// let convert = arr.map(array => array.toString())
// console.log(convert)

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3]

// nums.sort((number1, number2) => number1 - number2)
// console.log(nums);

// nums.sort((number1, number2) => number2 - number1)
// console.log(nums);

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

// coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(duration => duration.monthDuration > 5))

// описати колоду карт
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];


// - знайти піковий туз

// let aceSpade = deck.filter(card=>card.cardSuit==='Spade' && card.value ==='Ace')
// console.log(aceSpade);

// - всі шістки

// let six = deck.filter(card=>card.value === 6)
// console.log(six);

// - всі червоні карти

// let redCard = deck.filter(card=>card.color === 'Red')
// console.log(redCard);

// - всі буби

// let diamondCard = deck.filter(card=>card.cardSuit === "Diamonds")
// console.log(diamondCard);

// - всі трефи від 9 та більше

// let clubsCard = deck.filter(card=>card.cardSuit === "Clubs")
// let clubs = clubsCard.splice(0,3)
// console.log(clubsCard);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

// let reduce = deck.reduce((accumulator, card) => {
//     if(card.cardSuit === 'Spade'){
//         accumulator.spades.push(card)
//     }else if(card.cardSuit === 'Diamonds'){
//         accumulator.diamonds.push(card)
//     }else if(card.cardSuit === 'Hearts'){
//         accumulator.hearts.push(card)
//     }else if (card.cardSuit === 'Clubs'){
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// },{spades:[], diamonds:[], hearts:[], clubs:[] });
// console.log(reduce);


// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
