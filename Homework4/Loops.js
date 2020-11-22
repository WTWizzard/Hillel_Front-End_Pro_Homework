'use strict';

//Task: Iteation of odd numbers all variations

//while

const numbForIteration = 50;

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