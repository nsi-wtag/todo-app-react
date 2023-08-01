import PropTypes from "prop-types";
import "src/components/TaskNavBar/TaskNavBar.scss";

function FilterButton({ buttonText, onFilter }) {
  return (
    <button className="task-navbar__filter" onClick={onFilter}>
      {buttonText}
    </button>
  );
}

FilterButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onFilter: PropTypes.func,
};

export default FilterButton;
