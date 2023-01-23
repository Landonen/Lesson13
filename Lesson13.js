// --------------- FUNCTION
// const year = 2034;

// switch (year % 4) {
//     case 0:       // --- в случае если остаток при делении
//         console.log('It is a leap-year!');
//         break // важно написать в конце каждого случая кроме default
//     case 1:
//         console.log('Last year was a leap-year');
//         break
//     case 3: 
//         console.log('Next year will be a leap-year!');
//         break
//     default: // в любом другом случае
//         console.log('It is not a leap-year');
// }

// const month = 5;
// switch (month) {
//     case 6:
//         console.log('June, star of summer');
//         break
//     case 7:
//         console.log('July');
//         break
//     case 8:
//         console.log('August');
//         break
//     default:
//         console.log('It is not summer.');
// }

// ------------------------------------------------ ДА  - НЕТ

// const number = 10;
// number 
// ? console.log(number + 10) 
// : console.log(number - 10); // через двоеточие раздеяем 2 условия, при переносе переменная становится True / Flase.


// ------------------------------------------------- ИТЕРАЦИЯ

// const someArray = [true, 'abc', 123];

// console.log(someArray[0]);
// console.log(someArray[1]);
// console.log(someArray[2]);

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     year: 2022
// }


// ---------------- -------------------------------- ЦИКЛ FOR


// for (start statement; condition; iteration) { // КАК РАБОТАЕТ ЦИКЛ for
//     body of for cycle
// }

// for (let i = 0, j = 0; i < 1000, j > -1000; i += 5, j -=){

// }

// for (let i = 0; i < 5; i += 5) { // берём каждое пятое число
//     console.log(i);
// }

// ---------------------------------------------------

// for (let i = 0; i <= 1000; i++){
//     // i % 2 === 0 
//     // ? console.log('Чётное число: ' + i) 
//     // : console.log('Нечётное число: ' + i);
// //--------------------------------------------- ВТОРОЙ ВАРИАНТ
//     if ( i % 2 === 0) {
//         console.log(i, ' is Even');
//     } else {
//         console.log(i, ' is Odd');
//     }
// }

// - ------------------------------------------------ Цикл for внутри друг - друга

// for (let num1 = 0; num1 < 10; num1++){ // выводим все возможные комбинации от 0 до 9 из всех переменных
//     for (let num2 = 0; num2 < 10; num2++){
//         for (let num3 = 0; num3 < 10; num3++){ // начинаем работу с крайнего цикла! Потом после прокрутки возвращаемся на шаг назад
//             console.log(num1, num2, num3);
//         }
//     }
// }


// for (let i = 0, j = 10; i < 10; i++, j--){
//     console.log(i * j);
// }


//const myArr = ['one', 'two', 'three']; // КРАТКАЯ РАБОТА С МАССИВАМИ. РЕКОМЕНДУЕТСЯ ИСПОЛЬЗОВАТЬ forEach в массивах!!!!!!!!!!!!!!!!!!!!!
// ПЕРВЫЙ ВАРИАНТ
// // for (let i = 0; i < myArr.length; i++){ // ПЕРВЫЙ ВАРИАНТ
// //     console.log(myArr[i]);
// // }
// ВТОРОЙ ВАРИАНТ
// myArr.forEach((val, index) => console.log(val, index)); // ВТОРОЙ ВАРИАНТ


// ТРЕТИЙ ВАРИАНТ
// function printSomething(val, index) { // ТРЕТИЙ ВАРИАНТ
//     console.log(val, index);
// }
// myArr.forEach(printSomething)
// ЧЕТВЁРТЫЙ ВАРИАНТ
// myArr.forEach(function (val, index) {console.log(val, index);}) // ЧЕТВЁРТЫЙ ВАРИАНТ


//---------------------------------------------------- ЦИКЛ WHILE

// WHILE

// let counter = 0;
// while (counter <= 100) {
//     console.log(counter);
//     counter += 1;
// }

// DO WHILE
// do {
//     console.log(counter);
//     counter += 1;
// } while (counter < 100)

// const myArr = ['One', 'Two', 'Three', 'Four'];
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     year: 2000,
//     info: {
//         color: 'red',
//         mileage: 10000
//     }
// }

// // ------------------------------------ FOR IN FOR OF
// for (const key in myCar) { // чтобы выявить ключи и вставить их в переменную key
//     console.log(key, myCar[key]);
// }

// let txt = 'hello word';

// // FOR IN!
// for (const i in txt){
//     console.log(txt[i]);
// }
// for (const val of txt) {
//     console.log(val);
// }


// for ( const key in txt) {
//     if (txt[key] == 'o'){
//         console.log(txt[key].toUpperCase());
//     } else {
//         console.log(txt[key]);
//     }
// }


// const people = [
//     {
//         name: 'Jack',
//         surname: 'Smith',
//         age: 20
//     },
//     {
//         name: 'Amanda',
//         surname: 'Wills',
//         age: 24
//     },
//     {
//         name: 'Bob',
//         surname: 'Sapp',
//         age: 32
//     }
// ]

/* for (const person of people) {
    for (const key in person){
        console.log(person[key]);
    }
    console.log('-------------');
} */


/* for (const letter of 'javascript') {
    if (letter === 's'){
        continue // - -- - -- - - -- - - - - - РАЗРЫВАЕТ КРУГ ЦИКЛА, если увидит нужный объект
    } else if (letter === 'p'){
        break // используется для разрыва всего цикла! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
    } else {
        console.log(letter);
    } */
    
// }


// const chisla = [3, 5, 7, 8];
// let total = 1;

// for (let i = 0; i < chisla.length; i++){
//     total *= chisla[i];
// }
// console.log(total);