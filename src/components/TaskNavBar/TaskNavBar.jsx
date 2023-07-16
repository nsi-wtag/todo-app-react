import PropTypes from "prop-types";
import { FILTER_TASKS_BUTTON_TEXT_ARRAY } from "@common/constants";
import FilterButton from "@components/Buttons/FilterButton/FilterButton";
import "./TaskNavBar.scss";

function TaskNavBar({ onCreateButtonClick }) {
  return (
    <>
      <h2>Add Tasks</h2>
      <nav className="task-navbar">
        <button className="task-navbar__button" onClick={onCreateButtonClick}>
          Create
        </button>

        <div className="task-navbar__filters">
          {FILTER_TASKS_BUTTON_TEXT_ARRAY.map((filterButtonText, index) => (
            <FilterButton buttonText={filterButtonText} key={index} />
          ))}
        </div>
      </nav>
    </>
  );
}

TaskNavBar.propTypes = {
  onCreateButtonClick: PropTypes.func.isRequired,
};

export default TaskNavBar;
