'use strict';

//Task: Iteation of odd numbers all variations

//while

const numbForIteration = 20;

let index = 1;

while(index < numbForIteration){
    if(index % 2){
        console.log(index);
    }
    index++;
}

//do while

let index2 = 1;
do{
    if(index2 % 2){
        console.log(index2);
    }
    index2++;
}while(index2 < numbForIteration )

//for

for(let i = 1; i < numbForIteration; i++){
    if(i % 2){
        console.log(i);
    }
}


//Task: Iteation of even numbers all variations

//while

let index3 = 1;

while(index3 < numbForIteration){
    if(!(index3 % 2)){
        console.log(index3);
    }
    index3++;
}

//do while

let index4 = 1;
do{
    if(!(index4 % 2)){
        console.log(index4);
    }
    index4++;
}while(index4 < numbForIteration )

//for

for(let i = 1; i < numbForIteration; i++){
    if(!(i % 2)){
        console.log(i);
    }
}

//Task: Guess game with rand numbers

let numbComp = Math.floor(Math.random() * 10);
let numbUser;

do{
    numbUser = prompt('enter num');

}while(numbUser !== null && Number(numbUser) !== numbComp)

//Task: Multiplicity

let multiplicityNum = +prompt('Введите число которому должно быть кратно: ');
let multiplicityAmount = +prompt('Введите количество кратных чисел: ');

for(let i = 1; i <= multiplicityAmount * multiplicityNum; i++){
    if(!(i % multiplicityNum)){
        console.log(i);
    }
}

let idx = 1;

while(idx <= multiplicityAmount * multiplicityNum){
    idx++;
    if(!(idx % multiplicityNum)){
        console.log(idx);
    }
}

let idx2 = 1;

do {
    idx2++;
    if(!(idx2 % multiplicityNum)){
        console.log(idx2);
    }
} while (idx2 <= multiplicityAmount * multiplicityNum);