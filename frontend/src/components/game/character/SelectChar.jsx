import "../../../styles/SelectChar.scss";
import PropTypes from "prop-types";

function SelectChar({ setPage }) {
  return (
    <div className="container-game">
      <h2 className="h2">
        Clique sur le personnage de ton choix pour l'incarner durant ta partie
      </h2>
      <div className="container-select">
        <div
          className="container-select-1"
          onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          onKeyDown={() => setPage({ name: "DisplayQuizz", id: null })}
          role="presentation"
        >
          <img src="harry-potter.jpg" alt="" className="container-select-img" />
          <h2 className="harry-potter-font">Harry Potter</h2>
          <p>Maison : Gryffondor</p>
          <p>Caractéristique : 10 points de force supplémentaire</p>
        </div>
        <div
          className="container-select-1"
          onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          onKeyDown={() => setPage({ name: "DisplayQuizz", id: null })}
          role="presentation"
        >
          <img
            src="luna-lovegood.png"
            alt=""
            className="container-select-img"
          />
          <h2 className="harry-potter-font">Luna Lovegood</h2>
          <p>Maison : Poufsouffle</p>
          <p>Caractéristique : 10 points de vie supplémentaire</p>
        </div>
        <div
          className="container-select-1"
          onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          onKeyDown={() => setPage({ name: "DisplayQuizz", id: null })}
          role="presentation"
        >
          <img
            src="cedric-digory.png"
            alt=""
            className="container-select-img"
          />
          <h2 className="harry-potter-font">Cedric Diggory</h2>
          <p>Maison : Serdaigle</p>
          <p>Caractéristique : 10 points de défense supplémentaire</p>
        </div>
        <div
          className="container-select-1"
          onClick={() => setPage({ name: "DisplayQuizz", id: null })}
          onKeyDown={() => setPage({ name: "DisplayQuizz", id: null })}
          role="presentation"
        >
          <img src="drago-malfoy.png" alt="" className="container-select-img" />
          <h2 className="harry-potter-font">Draco Malfoy</h2>
          <p>Maison : Serpentard</p>
          <p>Caractéristique : 10 points inconnu supplémentaire</p>
        </div>
      </div>
    </div>
  );
}

SelectChar.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default SelectChar;
