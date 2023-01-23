// 1
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for of найдите произведение элементов этого массива.
// Сделайте то же самое с помощью обычного цикла for
console.log('Задание №1: \n');
const nums = [2, 3, 4, 5];
let total = 1;

for (let i = 0; i < nums.length; i++){
    total *= nums[i];
}

console.log('Результат умножения всех элементов: ' + total);

console.log('Задание №2: \n');

// 2
// Для каждого элемента массива вывести строку типа: Riga is in Latvia
// Использовать цикл for in
const countries = {
    UK: 'London',
    USA: 'New-York',
    Estonia: 'Tallinn',
    Finland: 'Helsinki',
    Germany: 'Berlin',
    Italy: 'Rome'
}
for (const city in countries){
    console.log(countries[city] + ' is in ' + city);
}

console.log('Задание №3: \n');
// 3
// Дано число 1000, делите его на 2 до тех пор, пока результат не будет меньше 5
// Количество итераций (раз сколько делили) выведите в консоль
let val = 1000;

let count = 0;

while (val <= 5) {

val = val / 2;

count++;
// console.log(count);
// console.log(val);
}
console.log(count);

console.log('Задание №4: \n');
// 4
// Для диапозона чисел от 0 до 999 в пустой массив нужно добавить строки
// строка должна состоять из 4 символов одно из которых число диапозона
// если 5 то строка 0005, если 500 то строка 0500
// PS если понадобиться длина числа, метод length с числом не работает
// String(число) конвертирует число в строку


const range = 999;
let emptyArr = []; 

for (let i = 0; i <= range; i++) {
const str = String(i);
const padding = "0000".substring(str.length);
emptyArr.push(padding + str);
}
console.log(emptyArr);

console.log('Задание №5: \n');
// 5
// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let num of numbers){
    if (num % 2 === 0){
        console.log(num + ' Чётное');
    } 
    else if (num === 23){
        console.log('Число 23, разрыв цикла');
    break 
} 
    // else {
    //     console.log(num + ' Нечётное');
    // }
}

console.log('Задание №6: \n');


// 6
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];
console.log('<ul>');
people.forEach(person => {
    console.log('\t<li><h1>Hello ' + person.name + ' ' + person.surname + '</h1></li>');
})
console.log('</ul>\n');

console.log('Задание №7: \n');

// 7
// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное



console.log('Задание №8: \n');
// 8
// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше


console.log('Задание №9: \n');
// 9
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх 


console.log('Задание №10: \n');
// 10
// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)
const myProfile = {
    name: 'Jack',
    surname: 'Smith',
    emailVerified: false,
    age: 20,
    gender: 'Male',
    city: 'London',
    zip: 13233,
    hasChildren: false,
    married: true
}

for(const key in myProfile){
    if (typeof myProfile[key] === 'string'){
        console.log('Название ключа: ' + [key] + '. Значение ключа: ' + myProfile[key]);
    }
}

//не понимаю как занести файл в этот гит