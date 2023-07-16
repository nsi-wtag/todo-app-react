import PropTypes from "prop-types";
import "@components/TaskNavBar/TaskNavBar.scss";

function FilterButton({ buttonText }) {
  return <button className="task-navbar__filter">{buttonText}</button>;
}

FilterButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default FilterButton;
