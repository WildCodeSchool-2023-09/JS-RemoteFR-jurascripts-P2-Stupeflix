let round = 0;
const lifeData = 10;
export const life = lifeData.toString();

export function fightTotality() {
  class Fighter {
    constructor(names, strength, dexterity) {
      this.names = names;
      this.strength = strength;
      this.dexterity = dexterity;
      this.lifeData = lifeData;
    }

    fight(defender) {
      const attackerDamage = Math.round(Math.random() * this.strength);
      const defenderDamage = Math.max(attackerDamage - defender.dexterity, 1);
      const def = defender;
      def.lifeData = Math.max(defender.lifeData - defenderDamage, 0);

      return {
        attacker: this,
        defender,
        attackerDamage,
        defenderDamage,
      };
    }

    isAlive() {
      return this.lifeData > 0;
    }
  }
  const character = new Fighter("Harry Potter", 15, 3);
  const enemy = new Fighter("Luna Lovegood", 15, 3);

  function fightRound(attacker, defender) {
    console.info(`${round}: ${attacker.names} attaque`);
    console.info(`${attacker.names} ${attacker.lifeData}`);
    console.info(`${defender.names} ${defender.lifeData}`);
  }

  while (character.isAlive() && enemy.isAlive()) {
    const attacker = round % 2 === 1 ? character : enemy;
    const defender = round % 2 === 0 ? character : enemy;
    attacker.fight(defender);
    round += 1;

    fightRound(round, attacker, defender);

    if (!defender.isAlive()) {
      console.info(`${attacker.names} win`);
      console.info(`${defender.names} lose`);
    }
  }
}
