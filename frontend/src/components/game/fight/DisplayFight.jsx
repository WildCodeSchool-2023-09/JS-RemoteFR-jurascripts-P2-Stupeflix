import "../../../styles/DisplayFight.scss";
import { useState } from "react";
import CharFight from "./CharFight";
import OpponentFight from "./OpponentFight";
import LifeComponent from "./LifeComponent";

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
            <CharFight />
            <h1 className="harry-potter-font fight-vs">VS</h1>
            <OpponentFight />
          </div>
          <button
            type="button"
            onClick={() => {
              setFightEnd(false);
              setTimeout(() => {
                isFightEnd();
              }, 5000);
            }}
          >
            Attaquer
          </button>
        </>
      ) : (
        <LifeComponent />
      )}
    </div>
  );
}

export default DisplayFight;
