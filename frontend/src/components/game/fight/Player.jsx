import "../../../styles/Player.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";

function Player({ selectedCharacter, setSelectedCharacter }) {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");

  useEffect(() => {
    const storedCharacter = sessionStorage.getItem(selectedCharacter);

    if (storedCharacter) {
      const parsedCharacter = JSON.parse(storedCharacter);
      setSelectedCharacter(parsedCharacter);
    }
  }, []);

  return (
    <div className="opp-fight">
      {isMobile
        ? selectedCharacter && (
            <>
              <h1 className="harry-potter-font fight-h1">
                {selectedCharacter.name}
              </h1>
              <img src={selectedCharacter.image} alt="" className="fight-img" />
              <div className="fight-box">
                <div className="fight-rod-life-outer">
                  <div className="fight-rod-life-inner">
                    {selectedCharacter.life}
                  </div>
                </div>
                <p className="fight-p2">Attaque:{selectedCharacter.strength}</p>
                <p className="fight-p-3">
                  Défense:{selectedCharacter.dexterity}
                </p>
              </div>
            </>
          )
        : selectedCharacter && (
            <>
              <h1 className="harry-potter-font fight-h1">
                {selectedCharacter.name}
              </h1>
              <div className="fight-box">
                <div className="fight-rod-life-outer">
                  <div className="fight-rod-life-inner">
                    Vie:{selectedCharacter.life}
                  </div>
                </div>
                <p className="fight-p2">Atq:{selectedCharacter.strength}</p>
                <p className="fight-p-3">Def:{selectedCharacter.dexterity}</p>
              </div>
            </>
          )}
    </div>
  );
}

Player.propTypes = {
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    life: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    dexterity: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedCharacter: PropTypes.func.isRequired,
};

export default Player;
