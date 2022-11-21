// --створити масив з:
//     - з 5 числових значень
// let arr =[];
// arr[4]= 5
// console.log(arr)

// - з 5 стічкових значень

// let arr =['str1','str2','str3','str4','str5',];
// console.log(arr)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr =  [2,17,13,6,22,31,45,66,100,-18];

// let arr = []
// arr[4] = 1
// console.log(arr)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// // 1. перебрати його циклом while
// let i =0;
// while (i<arr.length){
//     console.log(`${arr}`)
//     i++
// }
//     2. перебрати його циклом for

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(`${arr}`)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i =0;
// while (i<arr.length){
//    let item = arr[i];
//    if (item % 2)
//        console.log(arr[i])
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (item % 2)
//        console.log(arr[i])
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i =0;
// while (i<arr.length){
//    let item = arr[i];
//    if (item % 2 == 0)
//        console.log(arr[i])
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (item % 2 == 0)
//        console.log(arr[i])
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"


// for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (item % 3 == 0)
//         arr[i]= 'okten'
//        console.log(arr[i])
//
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement)
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = []
// for (let i = 0; i <10; i++) {
//     arr.push(i)
// }
//     console.log(arr)
