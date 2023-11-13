import PropTypes from "prop-types";
import "../../../styles/CharFight.scss";

function OpponentFight({ life }) {
  return (
    <div className="opp-fight">
      <h1 className="harry-potter-font fight-h1">Luna Lovegood</h1>
      <img src="luna-lovegood.png" alt="" className="fight-img" />
      <div className="fight-box">
        <p>Luna Lovegood</p>
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

OpponentFight.propTypes = {
  life: PropTypes.string.isRequired,
};

export default OpponentFight;
