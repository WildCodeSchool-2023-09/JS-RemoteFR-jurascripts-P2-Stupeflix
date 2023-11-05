import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../styles/Quizz.scss";

function Quizz({ data, questionNumber, setQuestionNumber, setTimeOut }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 1000);
    setTimeout(() => {
      setScore(a.correct ? score + 1 : score);
    }, 1000);

    setTimeout(() => {
      if (questionNumber + 1 <= 5) {
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 1000);
      } else {
        setShowResults(true);
      }

      setTimeout(() => {
        setTimeOut(true);
      }, 1000);
    }, 1000);
  };
  return (
    <div className="quizz">
      <h1>Quizz Selectif</h1>
      {showResults ? (
        <div className="final-result">
          <h1>Score Final</h1>
          <h2>Votre score est de {score} point(s)</h2>
          <p>Ce score sera ajouté aux stats de vos personnages.</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>Score: {score}</h2>
          <div className="question">{question?.text}</div>
          <picture>
            <img
              src={question?.img}
              className="imageQ"
              alt="imageofQuestions"
            />
          </picture>
          <div className="answers">
            {question?.options.map((a) => (
              <div
                key={a.id}
                className={selectedAnswer === a ? className : "answer"}
                onClick={() => !selectedAnswer && handleClick(a)}
                aria-hidden="true"
              >
                {a.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Quizz.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
  setTimeOut: PropTypes.func.isRequired,
};

export default Quizz;
