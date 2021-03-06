"use strict";

class MilitaryResource {
  constructor(type, health, distance) {
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = this.maxDistance = distance;
  }
  isReadyToFight() {
    return this.health > 0;
  }
  isReadyToMove() {
    return this.distance > 0;
  }
  restore() {
    this.health = this.maxHealth;

    this.distance = this.maxDistance;
  }
  clone() {
    return Object.assign(Object.create(this.__proto__), JSON.parse(JSON.stringify(this)));
  }
}

const sniper = new MilitaryResource("sniper", 85, 20);

const infantryman = new MilitaryResource("infantryman", 100, 50);

const scout = new MilitaryResource("scout", 60, 100);

const machineGunner = new MilitaryResource("machine gunner", 150, 10);

const wholeSquad = [sniper, scout, infantryman, machineGunner];

// Проверка правильно работает ли метод clone()
const clonedSoldier = infantryman.clone();

clonedSoldier.type = "clone";
console.log(clonedSoldier, infantryman); //Вроде правильно

class Squad {
  constructor(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
  }
  isReadyToFight() {
    return this.squad.every((soldier) => soldier.isReadyToFight());
  }
  isReadyToMove() {
    return this.squad.every((soldier) => soldier.isReadyToMove());
  }
  restore() {
    this.squad.forEach((soldier) => soldier.restore());
  }
  getReadyToMoveResources() {
    const ableToMoveResources = this.squad.filter((soldier) => soldier.isReadyToMove());

    return ableToMoveResources;
  }
  combineResources(defaultResources) {
    this.squad = [...this.squad,...defaultResources];
  }
  clone() {
    return this.squad.map(soldier=> soldier.clone());
  }
}
