import "../../../styles/Player.scss";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";

function Player() {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const storedCharacter = sessionStorage.getItem(selectedCharacter);

    if (storedCharacter) {
      const parsedCharacter = JSON.parse(storedCharacter);
      setSelectedCharacter(parsedCharacter);
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="opp-fight">
          {selectedCharacter && (
            <>
              <h1 className="harry-potter-font fight-h1">
                {selectedCharacter.name}
              </h1>
              <img src="harry-potter.jpg" alt="" className="fight-img" />
              <div className="fight-box">
                <div className="fight-rod-life-outer">
                  <div className="fight-rod-life-inner">
                    {selectedCharacter.life}
                  </div>
                </div>
                <p className="fight-p2">{selectedCharacter.strength}</p>
                <p className="fight-p-3">{selectedCharacter.dexterity}</p>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="opp-fight">
          {selectedCharacter && (
            <>
              <img src="harry-potter.jpg" alt="" className="fight-img" />
              <div className="fight-box">
                <p>{selectedCharacter.name}</p>
                <div className="fight-rod-life-outer">
                  <div className="fight-rod-life-inner">
                    {selectedCharacter.life}
                  </div>
                </div>
                <p className="fight-p2">{selectedCharacter.strength}</p>
                <p className="fight-p-3">{selectedCharacter.dexterity}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Player;
