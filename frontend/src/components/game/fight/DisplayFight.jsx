import "../../../styles/DisplayFight.scss";
import { useState } from "react";
import CharFight from "./CharFight";
import { life, fightTotality } from "../character/statChar.cjs";
import OpponentFight from "./OpponentFight";

function DisplayFight() {
  const [fightEnd, setFightEnd] = useState(true);
  const isFightEnd = () => {
    setFightEnd(!fightEnd);
  };

  return (
    <div className="container-game">
      {fightEnd ? (
        <>
          <div className="fgt-div-1">
            <CharFight life={life} />
            <h1 className="harry-potter-font fight-vs">VS</h1>
            <OpponentFight life={life} />
          </div>
          <button
            type="button"
            onClick={() => {
              fightTotality();
              setTimeout(() => {
                isFightEnd();
              }, 10000);
            }}
          >
            Attaquer
          </button>
        </>
      ) : (
        <h1>Tu as terminé ta partie !</h1>
      )}
    </div>
  );
}

export default DisplayFight;
