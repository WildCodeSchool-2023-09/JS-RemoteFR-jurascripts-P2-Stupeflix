import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../styles/Quizz.scss";

function Quizz({ data, questionNumber, setPage }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [numberOfQuestion, setNumberOfQuestion] = useState(1);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timeLeft = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
    return () => clearTimeout(timeLeft);
  }, [timer]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleNumberOfQuestion = () => {
    setNumberOfQuestion(numberOfQuestion + 1);
  };
  const selectRandomQuestion = () => {
    let randomQuestion = Math.floor(Math.random() * data.length);
    while (answeredQuestions.includes(data[randomQuestion])) {
      randomQuestion = Math.floor(Math.random() * data.length);
    }
    setQuestion(data[randomQuestion]);
    setAnsweredQuestions([...answeredQuestions, data[randomQuestion]]);
  };

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
      if (numberOfQuestion < 1) {
        setTimeout(() => {
          selectRandomQuestion();
          handleNumberOfQuestion();
          setSelectedAnswer(null);
        }, 500);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  return (
    <div className="quizz">
      {showResults ? (
        <div className="final-result">
          <h1 className="harry-potter-font">Score Final</h1>
          <h3>Votre score est de {score} point(s)</h3>
          <button
            type="button"
            onClick={() => setPage({ name: "DisplayFight", id: null })}
            className="harry-potter-font"
          >
            Fight
          </button>
          <p>Ton score sera ajouté aux stats de ton personnage</p>
        </div>
      ) : (
        <div className="question-container">
          <h1 className="harry-potter-font">Quizz Selectif</h1>
          <span>{timer}</span>
          <h2>{score}Pts</h2>
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
  setPage: PropTypes.func.isRequired,
};

export default Quizz;
