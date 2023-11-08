import { useState } from "react";
import PropTypes from "prop-types";

import Quizz from "./Quizz";
import questions from "./Questions";

function DisplayQuizz({ setPage }) {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="main">
      <Quizz
        data={questions}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        setPage={setPage}
      />
    </div>
  );
}
DisplayQuizz.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default DisplayQuizz;
