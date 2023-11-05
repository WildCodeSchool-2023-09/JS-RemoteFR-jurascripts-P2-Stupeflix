import { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";

function Params() {
  const [params, setParams] = useState(false);
  const toggleParams = () => {
    setParams(!params);
  };
  return (
    <>
      <div className="container-icons2">
        <BsFillGearFill
          className="container-icon-gear"
          onClick={toggleParams}
        />
      </div>
      {params && (
        <div className="container-params-info">
          <h3>Paramètres</h3>
          <p>Volume de la musique: 10/100</p>
          <p>Volume des voix des personnages: 10/10</p>
        </div>
      )}
    </>
  );
}

export default Params;
