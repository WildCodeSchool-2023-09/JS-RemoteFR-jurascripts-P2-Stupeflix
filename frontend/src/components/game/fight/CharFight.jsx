import "../../../styles/CharFight.scss";

function CharFight() {
  return (
    <div className="opp-fight">
      <h1 className="harry-potter-font fight-h1">Harry Potter</h1>
      <img src="harry-potter.jpg" alt="" className="fight-img" />
      <div className="fight-box">
        <p>Harry Potter</p>
        <div className="fight-rod-life-outer">
          <div className="fight-rod-life-inner">PLAYERLife</div>
        </div>
        <p className="fight-p2">Force : 15</p>
        <p className="fight-p-3">Défense : 3</p>
      </div>
    </div>
  );
}

export default CharFight;
