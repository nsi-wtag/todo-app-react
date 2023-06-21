import PropTypes from "prop-types";
import "./TaskCard.scss";

function TaskCard({ taskTitle, createdAt }) {
  return (
    <div className="tasks-container__box">
      <h3>{taskTitle}</h3>
      <p>Created At: {createdAt}</p>
    </div>
  );
}

TaskCard.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TaskCard;
