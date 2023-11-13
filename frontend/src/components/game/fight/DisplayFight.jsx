import "../../../styles/DisplayFight.scss";
import CharFight from "./CharFight";
import { Fighter, life } from "../character/statChar.cjs";
import OpponentFight from "./OpponentFight";

function DisplayFight() {
  return (
    <div className="container-game">
      <div className="fgt-div-1">
        <CharFight fighter={Fighter} life={life} />
        <h1 className="harry-potter-font fight-vs">VS</h1>
        <OpponentFight life={life} />
      </div>
    </div>
  );
}

export default DisplayFight;
