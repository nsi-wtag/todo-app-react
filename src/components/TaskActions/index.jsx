import PropTypes from "prop-types";
import { TASKS_BUTTON_FILTER_TEXT } from "@common/constants";
import FilterButton from "@components/Buttons/FilterButton";
import "./styles.scss";

function TaskActions({ onCreateTask }) {
  return (
    <>
      <h2>Add Tasks</h2>
      <nav className="task-navbar">
        <button className="task-navbar__button" onClick={onCreateTask}>
          Create
        </button>

        <div className="task-navbar__filters">
          {TASKS_BUTTON_FILTER_TEXT.map((label, index) => (
            <FilterButton label={label} key={index} />
          ))}
        </div>
      </nav>
    </>
  );
}

TaskActions.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};

export default TaskActions;
