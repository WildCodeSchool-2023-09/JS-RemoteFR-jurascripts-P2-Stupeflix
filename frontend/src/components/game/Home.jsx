import PropTypes from "prop-types";

function Home({ setPage }) {
  return (
    <div className="container-game">
      <h1 className="container-game-h1">HOGWARTS DAY</h1>

      <button
        type="button"
        onClick={() => setPage({ name: "DisplayCharact", id: null })}
        className="container-game-button"
      >
        Lancer la partie
      </button>
    </div>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default Home;
