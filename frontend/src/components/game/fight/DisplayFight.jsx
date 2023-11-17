import "../../../styles/DisplayFight.scss";
import { useState } from "react";
import Player from "./Player";
import OpponentFight from "./OpponentFight";
import Fight from "./Fight";
import enemyData from "./enemysData";

function DisplayFight() {
  const [fightEnd, setFightEnd] = useState(true);
  const [showFight, setShowFight] = useState(false);

  const randomEnemy = (enemies) => {
    const randomIndex = Math.floor(Math.random() * enemies.length);
    return enemies[randomIndex];
  };

  const [enemy, setEnemy] = useState(randomEnemy(enemyData));

  return (
    <div className="container-game">
      {fightEnd ? (
        <div className="fgt-div-1">
          <Player />
          {showFight ? (
            <Fight enemy={enemy} setEnemy={setEnemy} />
          ) : (
            <div className="versus">
              <h1
                className="harry-potter-font fight-vs"
                onClick={() => {
                  setFightEnd(false);
                  setTimeout(() => {
                    setShowFight(true);
                  }, 5000);
                }}
                onKeyDown={() => {
                  setFightEnd(false);
                  setTimeout(() => {
                    setShowFight(true);
                  }, 5000);
                }}
                role="presentation"
              >
                VS
              </h1>
            </div>
          )}
          <OpponentFight enemy={enemy} />
        </div>
      ) : (
        <div className="fgt-div-1">
          <Player />
          <Fight enemy={enemy} setEnemy={setEnemy} />
          <OpponentFight enemy={enemy} />
        </div>
      )}
    </div>
  );
}

export default DisplayFight;
