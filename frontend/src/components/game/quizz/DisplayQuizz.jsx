import { useState } from "react";
import PropTypes from "prop-types";

import Quizz from "./Quizz";
import questions from "./Questions";
import InfoCharact from "../character/InfoCharact";

function DisplayQuizz({ setPage }) {
  const [questionNumber, setQuestionNumber] = useState(questions[0].id);

  return (
    <>
      <InfoCharact />
      <div>
        <div className="container-game">
          <div className="main">
            <Quizz
              data={questions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

DisplayQuizz.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default DisplayQuizz;
