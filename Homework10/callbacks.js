'use strict';


Array.prototype.forEach_2 = function (cb, thisArg){
    if(typeof cb !== 'function'){
        throw new TypeError(`${cb} is not a function`);
    }

    if(this === null){
        throw new TypeError(' this is null or not defined')
    }

    const obj = Object(this);

    let l = obj.length;

    let _this;

    if(arguments.length > 1){
        _this = thisArg;
    }

    for (let key = 0; key < l; key++) {
        let keyValue;

        if(key in obj){
            keyValue = obj[key];
            cb.call(_this, keyValue, key, obj);
        }
    }
}


