'use strict';
//Task Power
const userNumber = +prompt('Enter number for exponentiation: ');
const userPow = +prompt('Enter the degree of the number: ');

const pow = (userNum, powNum) =>{
    let result = 1;
    for(let i = 0; i < powNum; i++){
        result *= userNum;
    }
    console.log(result)
}

pow(userNumber, userPow);