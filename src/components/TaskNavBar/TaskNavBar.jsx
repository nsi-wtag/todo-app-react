import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilterState } from "src/store/filter/actions/filterActions";
import { FILTER_TASKS_BUTTON_LABELS } from "src/common/constants";
import FilterButton from "src/components/Buttons/FilterButton/FilterButton";
import "./TaskNavBar.scss";

function TaskNavBar({ onCreateButtonClick }) {
  const dispatch = useDispatch();

  function handleFilterButtonClick(buttonLabel) {
    dispatch(setFilterState(buttonLabel));
  }

  return (
    <>
      <h2>Add Tasks</h2>
      <nav className="task-navbar">
        <button className="task-navbar__button" onClick={onCreateButtonClick}>
          Create
        </button>

        <div className="task-navbar__filters">
          {FILTER_TASKS_BUTTON_LABELS.map((filterButtonText, index) => (
            <FilterButton
              buttonText={filterButtonText}
              key={index}
              onClick={() =>
                handleFilterButtonClick(FILTER_TASKS_BUTTON_LABELS[index])
              }
            />
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
