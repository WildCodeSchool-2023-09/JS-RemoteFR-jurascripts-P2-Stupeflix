import { AiOutlineInfo } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { useState } from "react";
import Informations from "./hud/Informations";
import Params from "./hud/Params";
import Quizz from "./quizz/Quizz";
import questions from "./quizz/Questions";

function DisplayGame() {
  const [info, setInfo] = useState(false);
  const toggleInfo = () => {
    setInfo(!info);
  };

  const [params, setParams] = useState(false);
  const toggleParams = () => {
    setParams(!params);
  };
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="container-game-parent">
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
            <h3>Paramètres</h3>
            <p>Volume de la musique: 10/10</p>
            <p>Volume des voix des personnages: 10/10</p>
          </div>
        )}
        <h1 className="container-game-h1">HOGWARTS DAY</h1>
        <a href="/">
          <button type="button" className="container-game-button">
            Lancer la partie
          </button>
        </a>
        {info && (
          <div>
            <div className="container-info">
              <Informations />
              <Params />
            </div>
          </div>
        )}
      </div>
      <div className="main">
        <Quizz
          data={questions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
}

export default DisplayGame;
