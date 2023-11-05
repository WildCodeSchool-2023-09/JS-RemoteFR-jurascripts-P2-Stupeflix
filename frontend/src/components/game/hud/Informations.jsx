function Informations() {
  return (
    <>
      <div className="container-info-character">
        <h3 className="container-info-character-h3">Info de mon personnage</h3>
        <p className="container-info-character-p">Vie: </p>
        <p className="container-info-character-p">Attaque: </p>
        <p className="container-info-character-p">Défense </p>
      </div>
      <div className="container-info-day">
        <h3 className="container-info-day-h3">Info de la journée</h3>
        <p className="container-info-day-p">Point cumulé:</p>
        <p className="container-info-day-p">Lieu: </p>
        <p className="container-info-day-p">Heure: </p>
      </div>
    </>
  );
}

export default Informations;
