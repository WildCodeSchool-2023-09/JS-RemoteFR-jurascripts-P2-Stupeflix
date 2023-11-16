import "../../../styles/SelectChar.scss";
import PropTypes from "prop-types";
import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";
import characterData from "../fight/charactersData";

function SelectChar({ setPage }) {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleCharacterSelect = (character) => {
    setSelectedCharacter({
      name: character.name,
      house: character.house,
      characteristic: character.characteristic,
      life: character.life,
      strength: character.strength,
      dexterity: character.dexterity,
    });
    sessionStorage.setItem(
      selectedCharacter,
      JSON.stringify({
        name: character.name,
        house: character.house,
        characteristic: character.characteristic,
        life: character.life,
        strength: character.strength,
        dexterity: character.dexterity,
      })
    );
    setPage({ name: "DisplayQuizz", id: null });
  };
  return (
    <div className="container-game">
      {isMobile ? (
        <>
          <h2 className="h2">
            Clique sur le personnage de ton choix pour l'incarner durant ta
            partie
          </h2>
          <div className="container-select">
            {characterData.map((character) => (
              <div
                key={character.name}
                className="container-select-1"
                onClick={() => handleCharacterSelect(character)}
                onKeyDown={() => handleCharacterSelect(character)}
                role="presentation"
              >
                <img
                  src={character.image}
                  alt=""
                  className="container-select-img"
                />
                <h2 className="harry-potter-font">{character.name}</h2>
                <p>{character.house}</p>
                <p>{character.characteristic}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="container-select">
          {characterData.map((character) => (
            <div
              key={character.name}
              className="container-select-2"
              onClick={() => handleCharacterSelect(character)}
              onKeyDown={() => handleCharacterSelect(character)}
              role="presentation"
            >
              <img
                src={character.image}
                alt=""
                className="container-select-img"
              />
              <h2 className="harry-potter-font">{character.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SelectChar.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default SelectChar;
