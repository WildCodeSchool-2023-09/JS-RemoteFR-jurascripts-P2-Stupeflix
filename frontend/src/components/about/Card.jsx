import PropsTypes from "prop-types";

function Card({ firstName, lastName, language, picDev, picAlt }) {
  return (
    <div className="card-about">
      <h2 className="harry-potter-font">
        {firstName} {lastName}
      </h2>
      <img className="img-us" src={picDev} alt={picAlt} />
      <div>
        <p className="p-2">Role :</p>
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
  language: PropsTypes.string.isRequired,
};
export default Card;
