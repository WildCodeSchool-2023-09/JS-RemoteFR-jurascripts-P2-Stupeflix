import "../../../styles/Player.scss";
import PropTypes from "prop-types";
import { useMediaQuery } from "@react-hook/media-query";

function OpponentFight({ enemy }) {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  return (
    <div className="opp-fight">
      {isMobile ? (
        <>
          <h1 className="harry-potter-font fight-h1">{enemy.name}</h1>
          <img src="luna-lovegood.png" alt="" className="fight-img" />
          <div className="fight-box">
            <div className="fight-rod-life-outer">
              <div className="fight-rod-life-inner">{enemy.life}</div>
            </div>
            <p className="fight-p2">Attaque: {enemy.strength}</p>
            <p className="fight-p-3">Défense: {enemy.dexterity}</p>
          </div>
        </>
      ) : (
        <>
          <h1 className="harry-potter-font fight-h1">{enemy.name}</h1>
          <div className="fight-box">
            <div className="fight-rod-life-outer">
              <div className="fight-rod-life-inner">{enemy.life}</div>
            </div>
            <p className="fight-p2">Atq:{enemy.strength}</p>
            <p className="fight-p-3">Def:{enemy.dexterity}</p>
          </div>
        </>
      )}
    </div>
  );
}

OpponentFight.propTypes = {
  enemy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    life: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    dexterity: PropTypes.number.isRequired,
  }).isRequired,
};
export default OpponentFight;
