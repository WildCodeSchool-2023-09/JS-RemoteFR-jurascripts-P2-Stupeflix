import React, { useState, useEffect } from "react";

function LifeComponent() {
  const [combatLog, setCombatLog] = useState([]);
  const [winner, setWinner] = useState(null);

  const [character, setCharacter] = useState({
    name: "Harry Potter",
    strength: 15,
    dexterity: 3,
    life: 20,
  });

  const [enemy, setEnemy] = useState({
    name: "Benoît le BG",
    strength: 15,
    dexterity: 3,
    life: 20,
  });

  useEffect(() => {
    const fightInterval = setInterval(() => {
      if (character.life > 0 && enemy.life > 0) {
        const characterAttack = Math.round(Math.random() * character.strength);
        const enemyAttack = Math.round(Math.random() * enemy.strength);

        const characterDefenderDamage = Math.max(
          characterAttack - enemy.dexterity,
          1
        );
        const enemyDefenderDamage = Math.max(
          enemyAttack - character.dexterity,
          1
        );

        const characterNewLife = Math.max(
          character.life - enemyDefenderDamage,
          0
        );
        const enemyNewLife = Math.max(enemy.life - characterDefenderDamage, 0);

        setCharacter((prevCharacter) => ({
          ...prevCharacter,
          life: characterNewLife,
        }));
        setEnemy((prevEnemy) => ({ ...prevEnemy, life: enemyNewLife }));

        const roundDetail = `${character.name} inflige ${enemyDefenderDamage} dégâts à ${enemy.name}, et ${enemy.name} inflige ${characterDefenderDamage} dégâts à ${character.name}`;
        setCombatLog((prevLog) => [...prevLog, roundDetail]);

        if (characterNewLife <= 0 || enemyNewLife <= 0) {
          const winnerName =
            characterNewLife > enemyNewLife ? character.name : enemy.name;
          setWinner(`${winnerName} gagne !`);
          clearInterval(fightInterval);
        }
      } else {
        clearInterval(fightInterval);
      }
    }, 2000);

    return () => clearInterval(fightInterval);
  }, [character, enemy]);

  return (
    <div>
      <p>
        {character.name} - Vie: {character.life}
      </p>
      <p>
        {enemy.name} - Vie: {enemy.life}
      </p>
      <div>
        <h3>Détails du combat :</h3>
        {combatLog.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
        {winner && <p>{winner}</p>}
      </div>
    </div>
  );
}

export default LifeComponent;
