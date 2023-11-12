import PropTypes from "prop-types";
import "../../../styles/CharFight.scss";

function CharFight({ life }) {
  return (
    <>
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
    </>
  );
}

CharFight.propTypes = {
  life: PropTypes.string.isRequired,
};

export default CharFight;
