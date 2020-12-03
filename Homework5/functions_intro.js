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
const numbComp = (max) => Math.floor(Math.random() * max + 1);

const askNum = () => prompt('Enter number(1 to 10): ');

const loopFunc = () =>{
    const rand = numbComp(10)
    let ask;
    while(ask !== null && Number(ask) !== rand){
        ask = askNum()
    }
    return Number(ask) === rand
}


if(loopFunc()){
    console.log('You win!')
}else{
    console.log('Maybe next time')
}