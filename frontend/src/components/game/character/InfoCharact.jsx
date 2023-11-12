import { useState } from "react";
import "../../../styles/InfoCharact.scss";
import { BsDash, BsInfo } from "react-icons/bs";

function InfoCharact() {
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
      {infoChar && (
        <div className="div-info">
          <BsDash
            className="bsdash"
            onClick={() => {
              toggleInfoChar();
              toggleIconI();
            }}
          />
          <p>Caractéristique de Harry Potter</p>
          <ul>
            <li>Points de vie : 10</li>
            <li>Points de force : 15</li>
            <li>Points de défense : 3</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default InfoCharact;
