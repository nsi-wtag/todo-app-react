import PropTypes from "prop-types";
import "./TaskNavBar.scss";

function TaskNavBar({ onCreateButtonClicked }) {
  return (
    <>
      <h2>Add Tasks</h2>
      <nav className="navbar">
        <button className="navbar__button" onClick={onCreateButtonClicked}>
          Create
        </button>
        <div className="navbar__filters">
          <button className="navbar__filter">All</button>
          <button className="navbar__filter">Incomplete</button>
          <button className="navbar__filter">Complete</button>
        </div>
      </nav>
    </>
  );
}

TaskNavBar.propTypes = {
  onCreateButtonClicked: PropTypes.func.isRequired,
};

export default TaskNavBar;
