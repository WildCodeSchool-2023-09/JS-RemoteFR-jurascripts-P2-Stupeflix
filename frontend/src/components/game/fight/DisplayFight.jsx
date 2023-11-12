import "../../../styles/DisplayFight.scss";
import CharFight from "./CharFight";
import { Fighter, life } from "../character/statChar.cjs";

function DisplayFight() {
  return (
    <div className="container-game">
      <h1 className="harry-potter-font fight-h1">
        Harry Potter VS Ennemi sorcier
      </h1>
      <CharFight fighter={Fighter} life={life} />
    </div>
  );
}

export default DisplayFight;
