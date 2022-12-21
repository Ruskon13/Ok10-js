// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// const user1 = new User(1, 'Ruslan', 'Asd', 'ruslanasd@gmail.com', 111);
// const user2 = new User(2, 'Ivan', 'Pop', 'Ivanpopd@gmail.com', 222);
// const user3 = new User(3, 'Petro', 'Zxc', 'Petrozxc@gmail.com', 333);
// const user4 = new User(4, 'Lira', 'Qwe', 'Liraqwe@gmail.com', 444);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// const arrayUsers = [];
//
// arrayUsers.push(user1,user2,user3,user4);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let userFilter = arrayUsers.filter(value => value.id % 2 === 0);
// console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let userSort = arrayUsers.sort((a,b) => b.id - a.id)
//
// console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const user1 = new Client(1, 'Ruslan', 'Asd', 'ruslanasd@gmail.com', 111, ['milk', 'oats','strawberry','blueberry']);
// const user2 = new Client(2, 'Ivan', 'Pop', 'Ivanpopd@gmail.com', 222, ['eggs', 'juice','cake']);
// const user3 = new Client(3, 'Petro', 'Zxc', 'Petrozxc@gmail.com', 333, ['banana','apple','peach']);
// const user4 = new Client(4, 'Lira', 'Qwe', 'Liraqwe@gmail.com', 444, ['pineapple','juice','cucumber']);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// const arrayClients  = [];
//
// arrayClients.push(user1,user2,user3,user4);
//
// console.log(arrayClients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,year,maxSpeed,engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    function drive() {
        return `їдемо зі швидкістю ${maxSpeed} на годину`
    }

    function info() {
        return `модель - ${model},  виробник - ${producer}, рік випуску - ${year},  максимальна швидкість - ${maxSpeed}, об'єм двигуна - ${engine}`
    }
    
    
    
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку