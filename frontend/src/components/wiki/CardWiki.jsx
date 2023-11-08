import PropTypes from "prop-types";

function CardWiki({ name, species, gender, house, dateOfBirth, image }) {
  return (
    <div className="card-wiki">
      <picture>
        <img src={image} alt={name} />
      </picture>
      <h2>{name}</h2>
      <h3>{house}</h3>
      <ul>
        <li>{species}</li>
        <li>{gender}</li>
        <li>{dateOfBirth}</li>
      </ul>
    </div>
  );
}

CardWiki.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default CardWiki;
