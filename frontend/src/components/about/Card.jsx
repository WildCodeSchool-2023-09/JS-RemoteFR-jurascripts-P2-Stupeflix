import PropsTypes from "prop-types";

function Card({ firstName, lastName, role, picDev, picAlt }) {
  return (
    <div className="card-about">
      <h2 className="harry-potter-font">
        {firstName} {lastName}
      </h2>
      <img className="img-us" src={picDev} alt={picAlt} />
      <div>
        <p className="p-2">Rôle :</p>
        <h3>{language}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  firstName: PropsTypes.string.isRequired,
  lastName: PropsTypes.string.isRequired,
  picDev: PropsTypes.string.isRequired,
  picAlt: PropsTypes.string.isRequired,
  role: PropsTypes.string.isRequired,
};
export default Card;
