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
    const ableToMoveResources = this.squad.filter((soldier) =>
      soldier.isReadyToMove()
    );

    return ableToMoveResources;
  }
  combineResources(defaultResources) {
    this.squad = [...defaultResources];
  }
  clone() {
    return this.squad.map((soldier) => soldier.clone());
  }
}
module.exports = Squad;