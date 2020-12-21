'use strict';


const forEach_2 = function (cb, arr){

    for (let key = 0; key < arr.length; key++) {
        let keyValue; 
        if(key in arr){
            keyValue = arr[key];
            cb.apply(arr, [keyValue, key, arr]);
        }
    }
}
const some_2 = function (cb, arr){

    for (let key = 0; key < arr.length; key++) {
        let keyValue = arr[key];
        if(key in arr && cb.apply(arr, [keyValue, key, arr])){
            return true;
        }
    }
    return false;
}
