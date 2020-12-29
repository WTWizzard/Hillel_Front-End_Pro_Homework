'use strict';


const weapon = {
	modifications: ['total power', 'giant bullet'],
    type: ['boom'],
    [Symbol.iterator]() {
        const copy = Object.values(weapon);
        return {
          next: () => {
            const value = copy.shift();
            return {
              value,
              done: !value,
            };
          },
        };
      },
}

const allProperties = [...weapon];

console.log(allProperties)

const Singleton = (() => {
    const uniqueKey = Symbol('instance');
    let instance;
    function Singleton(key) {
      if(key !== uniqueKey) throw new Error('You should you instance static method instead');
    }
   
   Singleton.getInstance = () => {
     return instance ? instance : (instance = new Singleton.getInstance())
   }
   
   return Singleton;
 })();
 
 console.log(Singleton.getInstance() === Singleton.getInstance())