'use strict';

const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        for (const key in this) {
            if(typeof this[key] !== 'function' && typeof this[key] !== 'object' && nameOfIngridient === key){
                // let lnkToKettle = this.kettle.ingridients;
                this.kettle.ingridients = {...(this.kettle.ingridients),[nameOfIngridient]: amount};
                this[key] -= amount;
            }else{
                continue;
            }
        }
    },
    cook(recipe) {
        
    },
};

kitchen.addIngridientToKettle('bone', 10);
kitchen.addIngridientToKettle('stone', 100);
kitchen.addIngridientToKettle('nail', 100);
kitchen.addIngridientToKettle('poo', 70);

kitchen.cook(magicBook.recipes.golem)
