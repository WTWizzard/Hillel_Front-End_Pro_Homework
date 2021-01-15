'use strict';

//task I

// function curry(f, a, b){
//     return function(c,d){
//         return f(a,b,c,d)
//     }
// }

const curry = (f, ...numbers) => (...numbers2) => f(...numbers, ...numbers2)

// function sum(a,b,c,d) { return a+b+c+d }

const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0)

const curriedFunction = curry(sum, 1,2,142); // запоминает для вызова sum N параметров

console.log(curriedFunction(1,2,2)) // выводит 150


//task II

function counter(){
    let n = 0;
    return {
        inc(){
            return n++
        },
        dec(){
            return n--
        },
        value(){
            return n
        }
    }
}

const iterator = counter();
iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec() // уменьшает на 1

console.log(iterator.value()) // выводит 1