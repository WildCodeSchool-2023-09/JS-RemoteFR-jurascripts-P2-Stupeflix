import PropTypes from "prop-types";
import SelectChar from "./SelectChar";

function DisplayCharact({ setPage }) {
  return (
    <div>
      <SelectChar setPage={setPage} />
    </div>
  );
}
DisplayCharact.propTypes = {
  setPage: PropTypes.func.isRequired,
};
export default DisplayCharact;
