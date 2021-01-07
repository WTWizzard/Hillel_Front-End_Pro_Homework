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



