import PropsTypes from "prop-types";

function Card({ firstName, lastName, role, picDev }) {
  return (
    <div className="card-about">
      <h2 className="harry-potter-font">
        {firstName} {lastName}
      </h2>
      <img className="img-us" src={picDev} alt={firstName} />
      <div>
        <p className="p-2">Rôle :</p>
        <h3>{role}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  firstName: PropsTypes.string.isRequired,
  lastName: PropsTypes.string.isRequired,
  picDev: PropsTypes.string.isRequired,
  role: PropsTypes.string.isRequired,
};
export default Card;
