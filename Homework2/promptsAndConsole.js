'use strict';
//Age of the User
let usersInput = +prompt('Please enter year when you born: ');
console.log(`Your age is: ${2020 - usersInput} years old`);
//Averge numb
let forAvergeNum1 = +prompt('Please enter number: ');
let forAvergeNum2 = +prompt('Please enter number: ');
let forAvergeNum3 = +prompt('Please enter number: ');
let forAvergeNum4 = +prompt('Please enter number: ');

let Averge = (forAvergeNum1 + forAvergeNum2 + forAvergeNum3 + forAvergeNum4) / 4;

console.log(`Averge number from your data is: ${Averge}`);
//Random number to Console(5 different methods)

let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

console.log(randomNumber);
console.info(randomNumber);
console.error(randomNumber);
console.warn(randomNumber);
console.dir(randomNumber);