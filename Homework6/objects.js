'use strict';

const testObject = {
    isHuman: true,
    firstName: 'Victor',
    secondName: 'Von', 
    lastName: 'Doom',
    age: 34,
    status: 'villian',
}

//Task Log sum of all string length in object

const allStrLength = obj =>{
    let res = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            res += obj[key].length
        }
    }
    return res;
}

console.log(allStrLength(testObject))

//Task Copy all properties of Object without Values

const allPropertiesNoValues = obj =>{
    let newObj = {}

    for (const key in obj) {
        newObj[key] =  obj.key
    }
    console.log(newObj)
}
allPropertiesNoValues(testObject)

