import "../../../styles/Player.scss";
import { useMediaQuery } from "@react-hook/media-query";

function OpponentFight() {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  return (
    <div className="opp-fight">
      {isMobile ? (
        <>
          <h1 className="harry-potter-font fight-h1">Benoit le BG</h1>
          <img src="luna-lovegood.png" alt="" className="fight-img" />
          <div className="fight-box">
            <div className="fight-rod-life-outer">
              <div className="fight-rod-life-inner">Vie</div>
            </div>
            <p className="fight-p2">Attaque 10</p>
            <p className="fight-p-3">Defense 10</p>
          </div>
        </>
      ) : (
        <>
          <h1 className="harry-potter-font fight-h1">Benoit Le BG</h1>
          <div className="fight-box">
            <div className="fight-rod-life-outer">
              <div className="fight-rod-life-inner">life</div>
            </div>
            <p className="fight-p2">Force 10</p>
            <p className="fight-p-3">Defense 10</p>
          </div>
        </>
      )}
    </div>
  );
}

export default OpponentFight;
