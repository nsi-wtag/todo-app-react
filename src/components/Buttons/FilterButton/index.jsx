import PropTypes from "prop-types";
import "@components/TaskActions/styles.scss";

function FilterButton({ label }) {
  return <button className="task-navbar__filter">{label}</button>;
}

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FilterButton;
