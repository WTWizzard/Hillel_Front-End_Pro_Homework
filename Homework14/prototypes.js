"use strict";

function MilitaryResource(type, health, distance) {
  this.type = type;
  this.health = this.maxHealth = health;
  this.distance = this.maxDistance = distance;
}

MilitaryResource.prototype.isReadyToMove = function () {
  return this.distance > 0;
};

MilitaryResource.prototype.isReadyToFight = function () {
  return this.health > 0;
};

MilitaryResource.prototype.restore = function () {
  this.health = this.maxHealth;

  this.distance = this.maxDistance;
};

MilitaryResource.prototype.clone = function () {
  return Object.assign(Object.create(this.__proto__), JSON.parse(JSON.stringify(this)));
};

const sniper = new MilitaryResource("sniper", 85, 20);

const infantryman = new MilitaryResource("infantryman", 100, 50);

const scout = new MilitaryResource("scout", 60, 100);

const machineGunner = new MilitaryResource("machine gunner", 150, 10);

const wholeSquad = [sniper, scout, infantryman, machineGunner];

// Проверка правильно работает ли метод clone()
const clonedSoldier = infantryman.clone();

clonedSoldier.type = "clone";
console.log(clonedSoldier, infantryman); //Вроде правильно

function Squad(defaultResources) {
  this.squad = [];
  if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype.isReadyToMove = function () {
  return this.squad.every((soldier) => soldier.isReadyToMove());
};

Squad.prototype.isReadyToFight = function () {
  return this.squad.every((soldier) => soldier.isReadyToFight());
};

Squad.prototype.restore = function () {
  this.squad.forEach((soldier) => soldier.restore());
};

Squad.prototype.getReadyToMoveResources = function () {
  const ableToMoveResources = this.squad.filter((soldier) => soldier.isReadyToMove());

  return ableToMoveResources;
};

Squad.prototype.combineResources = function (defaultResources) {
  this.squad = [...this.squad,...defaultResources];
};

Squad.prototype.clone = function () {
  return this.squad.map(soldier=> soldier.clone());
};
