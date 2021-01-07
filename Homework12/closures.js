'use strict';

//task I

function curry(f, a, b){
    return function(c,d){
        return f(a,b,c,d)
    }
}

function sum(a,b,c,d) { return a+b+c+d; }

const curriedFunction = curry(sum, 1,2); // запоминает для вызова sum 2 параметра

console.log(curriedFunction(3,4)) // выводит 10 т.е. выполняется функционал sum(1,2,3,4).


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