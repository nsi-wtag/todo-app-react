import PropTypes from "prop-types";
import "./TaskCard.scss";

function TaskCard({ title, createdAt }) {
  return (
    <div className="tasks-container__box">
      <h3>{title}</h3>
      <p>Created At: {createdAt}</p>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TaskCard;
