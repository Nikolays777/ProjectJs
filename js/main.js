"use strict";

const str = 'Win';

// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str[2].toUpperCase());
// console.log(str[2].toLowerCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); //Поиск подстроки

const logg = 'Breadcramps';

// console.log(logg.slice(0, 11)); //вырезаем часть строки
// console.log(logg.substring(0, 11)); //вырезаем часть строки
console.log(logg.substr(2, 5)); //вырезаем часть строки

//Numbers

const num = 12.2;

console.log(Math.round(num));

const test = '12.2px';

// console.log(parseInt(test));
console.log(parseFloat(test));