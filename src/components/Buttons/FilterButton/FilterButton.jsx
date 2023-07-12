import PropTypes from "prop-types";
import "src/components/TaskNavBar/TaskNavBar.scss";

function FilterButton({ buttonText, onClick }) {
  return (
    <button className="task-navbar__filter" onClick={onClick}>
      {buttonText}
    </button>
  );
}

FilterButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default FilterButton;
