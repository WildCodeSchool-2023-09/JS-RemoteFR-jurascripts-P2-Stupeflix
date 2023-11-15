import { useState } from "react";
import "../../../styles/InfoCharact.scss";
import { BsDash, BsInfo } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

function InfoCharact() {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  const [infoChar, setInfoChar] = useState(true);
  const toggleInfoChar = () => {
    setInfoChar(!infoChar);
  };

  const [iconI, setIconI] = useState(false);
  const toggleIconI = () => {
    setIconI(!iconI);
  };
  return (
    <>
      {iconI && (
        <BsInfo
          className="bsinfo"
          onClick={() => {
            toggleInfoChar();
            toggleIconI();
          }}
        />
      )}
      {isMobile ? (
        <div>
          {infoChar && (
            <div className="div-info">
              <BsDash
                className="bsdash"
                onClick={() => {
                  toggleInfoChar();
                  toggleIconI();
                }}
              />
              <p>Statistiques de votre personnage:</p>
              <ul>
                <li>Points de vie : 10</li>
                <li>Points de force : 15</li>
                <li>Points de défense : 3</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          {infoChar && (
            <div className="div-info">
              <BsDash
                className="bsdash"
                onClick={() => {
                  toggleInfoChar();
                  toggleIconI();
                }}
              />
              <p>Stats:</p>
              <ul>
                <li>Vie: 10</li>
                <li>Atq: 15</li>
                <li>Def: 3</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default InfoCharact;
