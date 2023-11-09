import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineInfo } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

import Quizz from "./Quizz";
import questions from "./Questions";
import Informations from "../hud/Informations";
import Params from "../hud/Params";

function DisplayQuizz({ setPage }) {
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
    <div>
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
      {info && (
        <div className="container-info">
          <Informations />
        </div>
      )}
      <div className="main">
        <Quizz
          data={questions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

DisplayQuizz.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default DisplayQuizz;
