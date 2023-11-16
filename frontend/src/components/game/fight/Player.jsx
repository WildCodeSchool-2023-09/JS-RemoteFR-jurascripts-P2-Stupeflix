import "../../../styles/Player.scss";
import { useState, useEffect } from "react";

function Player() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const storedCharacter = sessionStorage.getItem(selectedCharacter);

    if (storedCharacter) {
      const parsedCharacter = JSON.parse(storedCharacter);
      setSelectedCharacter(parsedCharacter);
    }
  }, []);

  return (
    <div className="opp-fight">
      {selectedCharacter && (
        <>
          <h1 className="harry-potter-font fight-h1">
            {selectedCharacter.name}
          </h1>
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
  );
}

export default Player;
