import PropTypes from "prop-types";
import { useMediaQuery } from "@react-hook/media-query";

function CardWiki({ name, species, gender, house, dateOfBirth, image }) {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  return (
    <div className="card-wiki">
      {isMobile ? (
        <>
          <picture>
            <img src={image} alt={name} />
          </picture>
          <h2 className="harry-potter-font">{name}</h2>
          {house ? <h3>{house}</h3> : <h3>No house or Unknown</h3>}
          <ul>
            {species ? (
              <li>Species : {species}</li>
            ) : (
              <li>Species : Unknown</li>
            )}
            {gender ? <li>Gender : {gender}</li> : <li>Gender : Unknown</li>}
            {dateOfBirth ? (
              <li>Date of birth : {dateOfBirth}</li>
            ) : (
              <li>Date of birth : Unknown</li>
            )}
          </ul>
        </>
      ) : (
        <>
          <picture>
            <img src={image} alt={name} />
          </picture>
          <h2 className="harry-potter-font">{name}</h2>
          {house ? <h3>{house}</h3> : <h3>No house or Unknown</h3>}
        </>
      )}
    </div>
  );
}

CardWiki.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string,
  image: PropTypes.string.isRequired,
};

CardWiki.defaultProps = {
  dateOfBirth: `DateOfBirth`,
};
export default CardWiki;
