import { AiOutlineInfo } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { useState } from "react";
import PropTypes from "prop-types";
import Informations from "./hud/Informations";
import Params from "./hud/Params";

function DisplayGame({ setPage }) {
  const [info, setInfo] = useState(false);
  const toggleInfo = () => {
    setInfo(!info);
  };

  const [params, setParams] = useState(false);
  const toggleParams = () => {
    setParams(!params);
  };

  return (
    <div className="container-game">
      <div className="container-icons">
        <AiOutlineInfo className="container-icon-i" onClick={toggleInfo} />
        <BsFillGearFill
          className="container-icon-gear"
          onClick={toggleParams}
        />
      </div>
      {params && (
        <div className="container-params-info">
          <Params />
        </div>
      )}
      <h1 className="container-game-h1">HOGWARTS DAY</h1>

      <button
        type="button"
        onClick={() => setPage({ name: "DisplayCharact", id: null })}
        className="container-game-button"
      >
        Lancer la partie
      </button>

      {info && (
        <div className="container-info">
          <Informations />
        </div>
      )}
    </div>
  );
}

DisplayGame.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default DisplayGame;
