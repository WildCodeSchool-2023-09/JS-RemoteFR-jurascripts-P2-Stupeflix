import PropsTypes from "prop-types";

function Card({ firstName, lastName, dayOfBirth, language, picDev, picAlt }) {
  return (
    <div className="usCard">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Née le : {dayOfBirth}</p>
      <img src={picDev} alt={picAlt} />
      <p>Language : {language}</p>
    </div>
  );
}

Card.propTypes = {
  firstName: PropsTypes.string.isRequired,
  lastName: PropsTypes.string.isRequired,
  dayOfBirth: PropsTypes.string.isRequired,
  picDev: PropsTypes.string.isRequired,
  picAlt: PropsTypes.string.isRequired,
  language: PropsTypes.string.isRequired,
};
export default Card;
