import "../../../styles/CharFight.scss";

function OpponentFight() {
  return (
    <div className="opp-fight">
      <h1 className="harry-potter-font fight-h1">Benoît Le BG</h1>
      <img src="luna-lovegood.png" alt="" className="fight-img" />
      <div className="fight-box">
        <p>Benoît Le BG</p>
        <div className="fight-rod-life-outer">
          <div className="fight-rod-life-inner">life</div>
        </div>
        <p className="fight-p2">Force : 15</p>
        <p className="fight-p-3">Défense : 666</p>
      </div>
    </div>
  );
}

export default OpponentFight;
