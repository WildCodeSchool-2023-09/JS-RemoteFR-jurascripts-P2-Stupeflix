import "../../../styles/DisplayFight.scss";
import { useState } from "react";
import Player from "./Player";
import OpponentFight from "./OpponentFight";
import Fight from "./Fight";

function DisplayFight() {
  const [fightEnd, setFightEnd] = useState(true);
  const [showFight, setShowFight] = useState(false);

  return (
    <div className="container-game">
      {fightEnd ? (
        <div className="fgt-div-1">
          <Player />
          {showFight ? (
            <Fight />
          ) : (
            <>
              <h1 className="harry-potter-font fight-vs">VS</h1>
              <button
                type="button"
                onClick={() => {
                  setFightEnd(false);
                  setTimeout(() => {
                    setShowFight(true);
                  }, 5000);
                }}
              >
                Attaquer
              </button>
            </>
          )}
          <OpponentFight />
        </div>
      ) : (
        <div className="fgt-div-1">
          <Player />
          <Fight />
          <OpponentFight />
        </div>
      )}
    </div>
  );
}

export default DisplayFight;
