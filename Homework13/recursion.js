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

//Task II Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.

const task2_sub = (number, pow) => {
    if(number !== 1){
        number /= pow;
        return number < 1 ? false : task2_sub(number, pow)
    }else{
        return true
    }
}

const task2 = (n, pow) => {
    if(task2_sub(n, pow)){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

task2(16,2)