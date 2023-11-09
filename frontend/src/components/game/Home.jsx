import PropTypes from "prop-types";
import "../../styles/Home.scss";
import "../../styles/App.scss";

function Home({ setPage }) {
  return (
    <div className="container-game">
      <button
        type="button"
        onClick={() => setPage({ name: "DisplayCharact", id: null })}
        className="container-game-button harry-potter-font"
      >
        Hogwarts day
      </button>
    </div>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default Home;
