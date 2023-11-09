import PropTypes from "prop-types";
import CardWiki from "./CardWiki";

function CardListWiki({ character }) {
  return (
    <div className="container-wiki">
      {character.map((char) => (
        <CardWiki
          key={char.id}
          name={char.name}
          image={char.image}
          house={char.house}
          gender={char.gender}
          species={char.species}
          dateOfBirth={char.dateOfBirth}
        />
      ))}
    </div>
  );
}
CardListWiki.propTypes = {
  character: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string,
    })
  ).isRequired,
};
export default CardListWiki;
