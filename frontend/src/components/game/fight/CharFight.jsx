import PropTypes from "prop-types";
import "../../../styles/CharFight.scss";

function CharFight({ life }) {
  return (
    <div className="opp-fight">
      <h1 className="harry-potter-font fight-h1">Harry Potter</h1>
      <img src="harry-potter.jpg" alt="" className="fight-img" />
      <div className="fight-box">
        <p>Harry Potter</p>
        <div className="fight-rod-life-outer">
          <div className="fight-rod-life-inner" style={{ "--width": life }}>
            {life}
          </div>
        </div>
        <p className="fight-p2">Force : 15</p>
        <p className="fight-p-3">Défense : 3</p>
      </div>
    </div>
  );
}

CharFight.propTypes = {
  life: PropTypes.string.isRequired,
};

export default CharFight;
