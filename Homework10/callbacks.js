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
    if(arr.length === 0){
        return false;
    }
    for (let key = 0; key < arr.length; key++) {
        let keyValue = arr[key];
        if(key in arr && cb.apply(arr, [keyValue, key, arr])){
            return true;
        }
    }
    return false;
}

const every_2 = function (cb, arr){
    if(arr.length === 0){
        return true;
    }
    for(let key = 0; key < arr.length; key++){
        let keyValue = arr[key];
        if(key in arr){
            let res = cb.apply(arr, [keyValue, key, arr])
            if(!res){
                return false;
            }
        }
    }
    return true;
}

const runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (i) {
                i();
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}
runner.add(() => console.log('Hello'));
runner.add(() =>  console.log('World'));
runner.setSpeed(2000)