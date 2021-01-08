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

//Task III Дано натуральное число N. Вычислите сумму его цифр.

const task3 = (n) =>{
    if(n !== 0){
        return (n % 10) + task3(Math.floor(n/10))
    }
    return 0;   
}

console.log(task3(1234))//10

//Task IV Дан объект с N вложенностями. Скопируйте объект вглубину (без ссылок)

const obj = {
    a: 2,
    b: {
        c: 4,
        d: {
            e: 5,
            f: {
                g: 6,
            },
        },
    },
};

const task4 = (inObj) => {
    let outObj, value;

    if (typeof inObj !== "object" || inObj === null) return inObj;

    outObj =  Array.isArray(inObj) ? [] : {};

    for (let key in inObj) {
        value = inObj[key]
    
        outObj[key] = task4(value)
    }
    
    return outObj
};


const obj2 = task4(obj);

obj2.b.c =12;

console.log(obj, obj2)

/*
    Task V: Дан объект с N вложенностями. При передаче строки вида 'a.b.c' должно вернуться значение, 
    находящееся внутри вложенности, указанной через точку. Либо, если значения не существует - undefined
*/

const task5 = (obj,path) =>{
    let value, lane;
    
    if(Array.isArray(path)){
    	path.shift();
      lane = path;
    }else{
    	lane = path.split('.')
    }

    if (typeof obj !== "object" || obj === null) return obj;

    for (const el of lane) {
        value = obj[el]

        return task5(value, lane)   
    }
}

console.log(task5(obj2, 'b.c'))