const MilitaryResource = require('./classes/MilitaryResource');
const Squad = require('./classes/Squad');

const sniper = new MilitaryResource("sniper", 85, 20);

const infantryman = new MilitaryResource("infantryman", 100, 50);

const scout = new MilitaryResource("scout", 60, 100);

const machineGunner = new MilitaryResource("machine gunner", 150, 10);

const wholeSquad = [sniper, scout, infantryman, machineGunner];

// Проверка правильно работает ли метод clone()
const clonedSoldier = infantryman.clone();

clonedSoldier.type = "clone";
console.log(clonedSoldier, infantryman); //Вроде правильно

const suicideSquad = new Squad(wholeSquad)

console.log(suicideSquad)