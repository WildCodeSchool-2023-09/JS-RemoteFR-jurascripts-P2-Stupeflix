import "../../../styles/SelectChar.scss";
import PropTypes from "prop-types";

function SelectChar({ setPage }) {
  return (
    <div className="container-game">
      <div className="container-select">
        <div className="container-select-1">
          <img
            src="src/assets/harry-potter.jpg"
            alt=""
            className="container-select-img"
          />
          <button
            className="container-button"
            type="button"
            onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          >
            Harry Potter
          </button>
        </div>
        <div className="container-select-1">
          <img
            src="src/assets/luna-lovegood.png"
            alt=""
            className="container-select-img"
          />
          <button
            className="container-button"
            type="button"
            onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          >
            Luna Lovegood
          </button>
        </div>
        <div className="container-select-1">
          <img
            src="src/assets/cedric-digory.png"
            alt=""
            className="container-select-img"
          />
          <button
            className="container-button"
            type="button"
            onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          >
            Cedric Diggory
          </button>
        </div>
        <div className="container-select-1">
          <img
            src="src/assets/drago-malfoy.png"
            alt=""
            className="container-select-img"
          />
          <button
            className="container-button"
            type="button"
            onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          >
            Draco Malfoy
          </button>
        </div>
      </div>
    </div>
  );
}

SelectChar.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default SelectChar;
