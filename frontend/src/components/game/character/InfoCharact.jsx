import { useState, useEffect } from "react";
import "../../../styles/InfoCharact.scss";
import { BsDash, BsInfo } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

function InfoCharact() {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const storedCharacter = sessionStorage.getItem(selectedCharacter);

    if (storedCharacter) {
      const parsedCharacter = JSON.parse(storedCharacter);
      setSelectedCharacter(parsedCharacter);
    }
  }, []);

  const [infoChar, setInfoChar] = useState(true);
  const toggleInfoChar = () => {
    setInfoChar(!infoChar);
  };

  const [iconI, setIconI] = useState(false);
  const toggleIconI = () => {
    setIconI(!iconI);
  };
  return (
    <>
      {iconI && (
        <BsInfo
          className="bsinfo"
          onClick={() => {
            toggleInfoChar();
            toggleIconI();
          }}
        />
      )}
      {isMobile ? (
        <div>
          {infoChar && (
            <div className="div-info">
              <BsDash
                className="bsdash"
                onClick={() => {
                  toggleInfoChar();
                  toggleIconI();
                }}
              />
              {selectedCharacter && (
                <>
                  <p>
                    Statistiques de ton personnage "{selectedCharacter.name}":
                  </p>
                  <ul>
                    <li>Vie: {selectedCharacter.life}</li>
                    <li>FAttaque: {selectedCharacter.strength}</li>
                    <li>Défense: {selectedCharacter.dexterity}</li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          {infoChar && (
            <div className="div-info">
              <BsDash
                className="bsdash"
                onClick={() => {
                  toggleInfoChar();
                  toggleIconI();
                }}
              />
              {selectedCharacter && (
                <>
                  <p>{selectedCharacter.name}:</p>
                  <ul>
                    <li>Vie: {selectedCharacter.life}</li>
                    <li>Atq: {selectedCharacter.strength}</li>
                    <li>Déf: {selectedCharacter.dexterity}</li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default InfoCharact;
