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

//Task Guess game Function version
let numbComp = Math.floor(Math.random() * 10 + 1);
let userNum;
const askNum = () =>{
    userNum = prompt('Enter number(1 to 10): ');
}
const checkNum =() =>{
    return userNum !== null && Number(userNum) !== numbComp;
}
console.log(numbComp)
const loopFunc = () =>{
    while(checkNum()){
        askNum()
    }
}

loopFunc();