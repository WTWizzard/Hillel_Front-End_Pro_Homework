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
    return new MilitaryResource(this.type, this.health, this.distance);
  }
}

module.exports = MilitaryResource;
