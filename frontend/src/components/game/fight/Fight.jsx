import React, { useState, useEffect } from "react";
import "../../../styles/Fight.scss";

function Fight() {
  const [combatLog, setCombatLog] = useState([]);
  const [winner, setWinner] = useState(null);

  const [character, setCharacter] = useState({
    name: "Christopher",
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
    <div className="combatlog">
      <h2 className="combatlog harry-potter-font">Détails du combat :</h2>
      {combatLog.map((details) => (
        <p key={details + 1} className="combatslog">
          {details}
        </p>
      ))}
      {winner && <h2 className="winner harry-potter-font">{winner}</h2>}
    </div>
  );
}

export default Fight;
