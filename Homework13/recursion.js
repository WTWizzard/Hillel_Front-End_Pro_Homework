'use strict';

//Task I Дано натуральное число n. Выведите все числа от 1 до n

const task1 = (n) =>{
    if(n > 1){
        console.log(n);
        return task1(n-1)
    }else{
        console.log(n)
    }
}

task1(10)

