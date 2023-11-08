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
  character: PropTypes.arrayOf.isRequired,
};
export default CardListWiki;
