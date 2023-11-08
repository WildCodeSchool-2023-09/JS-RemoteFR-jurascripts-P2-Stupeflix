import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../styles/Quizz.scss";

function Quizz({ data, questionNumber, setQuestionNumber }) {
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
    }, 500);
    setTimeout(() => {
      setScore(a.correct ? score + 1 : score);
    }, 800);

    setTimeout(() => {
      if (questionNumber + 1 <= 5) {
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 500);
      } else {
        setShowResults(true);
      }
    }, 1500);
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          correct: PropTypes.bool.isRequired,
        })
      ).isRequired,
      difficult: PropTypes.number,
    })
  ).isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
};

export default Quizz;
