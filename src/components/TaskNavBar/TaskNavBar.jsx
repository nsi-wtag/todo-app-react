import PropTypes from "prop-types";
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
          <button className="task-navbar__filter">All</button>
          <button className="task-navbar__filter">Incomplete</button>
          <button className="task-navbar__filter">Complete</button>
        </div>
      </nav>
    </>
  );
}

TaskNavBar.propTypes = {
  onCreateButtonClick: PropTypes.func.isRequired,
};

export default TaskNavBar;
